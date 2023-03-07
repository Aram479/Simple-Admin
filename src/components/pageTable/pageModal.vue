<template>
  <div class='pageModal'>
    <!-- 编辑/新建弹出框 -->
    <el-dialog v-model="isModal" :title="tableBtnName" width="30%" center @closed="handleClose">
      <SearchForm ref="searchFormRef" v-bind="modalConfig" :rowItems="rowItems"></SearchForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isModal = false">{{ $t('Cancel') }}</el-button>
          <el-button type="primary" @click="handleConfirm">
            {{ $t('Confirm') }}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import SearchForm from '../searchForm/searchForm.vue';
import { ISearchFormConfig, Iform } from '../searchForm/searchFormTypes';
import { ref, computed, watch } from 'vue';
import { useSystemStore } from "@/stores/modules/system";
import { Option } from 'element-plus/es/components/select-v2/src/select.types';

const props = withDefaults(defineProps<{
  modalConfig?: ISearchFormConfig
  pageName: string,
  tableBtnName: string,
  departmentOptions?: Option[],
  roleOptions?: Option[],
}>(), {
  modalConfig: ()=> ({}),
  pageName: '',
  tableBtnName: '',
  departmentOptions: ()=> ([]),
  roleOptions: ()=> ([]),
})
const systemStore = useSystemStore();

const modalType = ref<string>('create')
const isModal = ref<boolean>(false)
const rowItems = ref<Iform>()
const searchFormRef = ref<InstanceType<typeof SearchForm>>()
const formModel = computed(()=> searchFormRef.value?.form)

const handleClose = ()=>{
  searchFormRef.value?.handleReset()
  rowItems.value = {}
}
const handleConfirm = async ()=> {
  const validate = await searchFormRef.value!.validateForm()
  if(validate) modalType.value === 'create' ? handleCreate() : handleEdit()
}
const handleCreate = ()=> {
  const creData = {
    pageName: props.pageName,
    newData: formModel.value
  }
  systemStore.createPageActions(creData)
  isModal.value = false
}

const handleEdit = ()=> {
  const editData = {
    pageName: props.pageName,
    id: <number>rowItems.value?.id,
    editData: formModel.value
  }
  systemStore.editPageDataAction(editData)
  isModal.value = false
}

watch(modalType, (type)=> {
  // 动态根据编辑或新增隐藏某组件
  props.modalConfig.formItems?.map(item=> {
    return item.formType && item.formType !== type ? item.isHidden = true : item.isHidden = false
  })
  console.log(JSON.parse(JSON.stringify(props.modalConfig.formItems)))
})
defineExpose({
  isModal,
  rowItems,
  modalType
})
</script>

<style lang='scss' scoped></style>
