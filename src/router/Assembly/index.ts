import Map from "@/views/Assembly/Map/Map.vue";
import Typewrite from "@/views/Assembly/Typewrite/Typewrite.vue";
import TimeLine from "@/views/Assembly/TimeLine/TimeLine.vue";
import MessagePoint from "@/views/Assembly/MessagePoint/MessagePoint.vue";
import Draggable from "@/views/Assembly/Draggable/Draggable.vue";
import WaterMark from "@/views/Assembly/WaterMark/WaterMark.vue";
import Print from "@/views/Assembly/Print/Print.vue";
import Debounce from "@/views/Assembly/Debounce/Debounce.vue";
import Qrcode from "@/views/Assembly/Qrcode/Qrcode.vue";
import VirtualList from "@/views/Assembly/VirtualList/VirtualList.vue";
import PDFPreview from "@/views/Assembly/PDFPreview/PDFPreview.vue";
import Camera from "@/views/Assembly/Camera/Camera.vue";
import Editor from '@/views/Assembly/Editor/Editor.vue'
const children = [
  {
    path: "/map",
    name: "map",
    component: Map,
    meta: {
      name: "地图",
      noRequest: true,
      zhCN: "地图",
      en: "Map",
    },
  },
  {
    path: "/typewrite",
    name: "typewrite",
    component: Typewrite,
    meta: {
      name: "打字机",
      noRequest: true,
      zhCN: "打字机",
      en: "Typewrite",
    },
  },
  {
    path: "/timeline",
    name: "timeline",
    component: TimeLine,
    meta: {
      name: "时间线",
      noRequest: true,
      zhCN: "时间线",
      en: "TimeLine",
    },
  },
  {
    path: "/messagepoint",
    name: "messagepoint",
    component: MessagePoint,
    meta: {
      name: "消息提示",
      noRequest: true,
      zhCN: "消息提示",
      en: "Message",
    },
  },
  {
    path: "/draggable",
    name: "draggable",
    component: Draggable,
    meta: {
      name: "拖拽",
      noRequest: true,
      zhCN: "拖拽",
      en: "Draggable",
    },
  },
  {
    path: "/watermark",
    name: "watermark",
    component: WaterMark,
    meta: {
      name: "水印",
      noRequest: true,
      zhCN: "水印",
      en: "WaterMark",
    },
  },
  {
    path: "/print",
    name: "print",
    component: Print,
    meta: {
      name: "打印",
      noRequest: true,
      zhCN: "打印",
      en: "Print",
    },
  },
  {
    path: "/debounce",
    name: "debounce",
    component: Debounce,
    meta: {
      name: "防抖节流",
      noRequest: true,
      zhCN: "防抖节流",
      en: "Debounce & Throttle",
    },
  },
  {
    path: "/qrcode",
    name: "qrcode",
    component: Qrcode,
    meta: {
      name: "二维码",
      noRequest: true,
      zhCN: "二维码",
      en: "Qrcode",
    },
  },
  {
    path: "/virtualList",
    name: "virtualList",
    component: VirtualList,
    meta: {
      name: "虚拟列表",
      noRequest: true,
      zhCN: "虚拟列表",
      en: "VirtualList",
    },
  },
  {
    path: "/pdfPreview",
    name: "pdfPreview",
    component: PDFPreview,
    meta: {
      name: "PDF预览",
      noRequest: true,
      zhCN: "PDF预览",
      en: "PDF Preview",
    },
  },
  {
    path: "/camera",
    name: "camera",
    component: Camera,
    meta: {
      name: "摄像头",
      noRequest: true,
      zhCN: "摄像头",
      en: "Camera",
    },
  },
  {
    path: "/editor",
    name: "editor",
    component: Editor,
    meta: {
      name: "编辑器",
      noRequest: true,
      zhCN: "编辑器",
      en: "Editor",
    },
  }
];
export default children;
