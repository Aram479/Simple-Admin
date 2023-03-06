<template>
  <div class='pageModal'>
    <!-- 编辑弹出框 -->
    <el-dialog v-model="isModal" title="新建用户" width="30%" center>
      <SearchForm ref="searchFormRef" v-if="isModal" v-bind="modalConfig" :rowItems="rowItems"></SearchForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isModal = false">{{ $t('Cancel') }}</el-button>
          <el-button type="primary" @click="handleEditConfirm">
            {{ $t('Confirm') }}
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import SearchForm from '../searchForm/searchForm.vue';
import { ISearchFormConfig, ISearchItem } from '../searchForm/searchFormTypes';
import { ISystemListData } from '@/service/system/systemAPIType';
import { reactive, ref } from 'vue'
import { useSystemStore } from "@/stores/modules/system";
import { storeToRefs } from 'pinia';

const props = withDefaults(defineProps<{
  modalConfig?: ISearchFormConfig
  pageName: string
}>(), {
  modalConfig: ()=> ({}),
})
const systemStore = useSystemStore();

const isModal = ref<boolean>(false)
const rowItems = ref<ISystemListData>()
const searchFormRef = ref<InstanceType<typeof SearchForm>>()

const handleEditConfirm = ()=> {
  const editData = {
    pageName: props.pageName,
    id: <number>rowItems.value?.id,
    editData: searchFormRef.value?.form
  }
  systemStore.editPageDataAction(editData)
  isModal.value = false
}
defineExpose({
  isModal,
  rowItems
})
</script>

<style lang='scss' scoped></style>
