/**
 * 菜单模块类定义
 */
export interface Module {
  "id": string,
  "code": string,
  "icon": string,
  "name": string,
  "parentId": string,
  "treeOrder": number,
  "url": string,
  "state": string,
  "checked": boolean,
  "child": Module[],
  "tree": string,
  "showTrend": number,
  "showDecline": number,
  "showEvent": number
}
