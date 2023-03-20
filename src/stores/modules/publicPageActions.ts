import { useEventbus } from '@/utils/mitt';
import { deletePageData, editPageData, getPageListData, createPageData } from '../../service/system/systemAPI';
import { Message } from "@/utils/message";
import _ from 'lodash'
import type { IRowType, IUserResType } from "@/views/Main/system/user/userViewType";

export function publicPageActions(state: any) {
    /* 获取页面数据 */
  const getPageListActions = async ({pageName, queryInfo}: IUserResType)=> {
    const pageUrl = `/${pageName}/list`
    state.tableLoading = true
    const { data } = await getPageListData(pageUrl, queryInfo);
    // const setStr = (_.capitalize(pageName))
    // //根据pageName调用不同存储方法  capitalize 首字母大写   data.totalCount 可能为undifine 因为menu没有
    // This[`set${setStr}List`](data.list, data.totalCount ?? 0)
    state[`${pageName}List`] = data.list
    state[`${pageName}Count`] = data.totalCount ?? 0
    setTimeout(()=>{
      state.tableLoading = false
    }, 500)
  }
  /* 新增页面行数据 */
  const createPageActions = async ({pageName, newData}: IRowType)=> {
    const pageUrl = `/${pageName}`
    const res = await createPageData(pageUrl, newData)
    if(res.code !== 0) return Message('添加失败', { type: 'error' })
    else Message('添加成功', { type: 'success' })
    useEventbus().toRefreshTable()
  }
  /* 删除某页面行数据 */
  const deletePageActions = async ({pageName, id}: IRowType)=> {
    const pageUrl = `/${pageName}/${id}`
    const res = await deletePageData(pageUrl)
    if(res.code !== 0) return Message('删除失败', { type: 'error' })
    else Message('删除成功', { type: 'success' })
    useEventbus().toRefreshTable()
  }
  /* 编辑某页面行数据 */
  const editPageDataAction = async ({pageName, id, editData}: IRowType)=> {
    const pageUrl = `/${pageName}/${id}`
    const res = await editPageData(pageUrl, editData)
    if(res.code !== 0) return Message('修改失败', { type: 'error' })
    else Message('修改成功', { type: 'success' })
    useEventbus().toRefreshTable()
  }
  return {
    getPageListActions,
    createPageActions,
    deletePageActions,
    editPageDataAction
  }
}
