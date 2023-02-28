import { onUnmounted } from "vue";
import mitt, {EventType} from "mitt";

const emitter = mitt();

function emitBus<K = string, T = any>(eventName: K extends EventType ? K : EventType, data?: T) {
  emitter.emit(eventName, data);
}

function onBus<K = string, T = any>(eventName: K extends EventType ? K : EventType, callback: (data: T) => void)  {
  emitter.on(eventName, (res: any) => callback(res));
};

/**
 * @description: 通知刷新表格数据
 */
const toRefreshTable = (data?: any) => {
  emitter.emit("refreshTable", data);
};

const refreshTable = (callback: (data?: any) => void) => {
  emitter.on("refreshTable", (res) => callback(res));
};

/**
 * @description: 导出useEventbus
 */
function eventbuss() {
  // 销毁的事件
  onUnmounted(() => {
    // 清空所有的事件，避免多组件互相清理
    emitter.all.clear();
  });

  return {
    emitBus,
    onBus,
    toRefreshTable,
    refreshTable,
  };
}
export const useEventbus = eventbuss;
