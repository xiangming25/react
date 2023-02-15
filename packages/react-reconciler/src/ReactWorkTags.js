/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type WorkTag =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25;

export const FunctionComponent = 0; // 函数组件
export const ClassComponent = 1;  // 类组件
export const IndeterminateComponent = 2; // 不太确定是 Function 组件还是 Class 组件。初始对应 App 组件
export const HostRoot = 3; // node.FiberRoot 组件
export const HostPortal = 4; // 使用 createPortal 创建的节点
export const HostComponent = 5; // HTML 标签
export const HostText = 6;  // HTML 文本节点
export const Fragment = 7;  // Fragment 组件
export const Mode = 8;  // 模式类型
export const ContextConsumer = 9; // Context Consumer 组件
export const ContextProvider = 10;  // Content Provider 组件
export const ForwardRef = 11; // ForwardRef 组件
export const Profiler = 12; // Profiler 组件
export const SuspenseComponent = 13;  // 懒加载组件
export const MemoComponent = 14;  // React.memo 组件，通过检查 props 变更决定是否重新渲染组件
export const SimpleMemoComponent = 15; // // React.memo 组件，未加第二个参数，通过检查 props 变更决定是否重新渲染组件
export const LazyComponent = 16;  // 动态组件
export const IncompleteClassComponent = 17; // 是懒加载组件，并且是 ClassComponent 组件，并且懒加载组件报错了
export const DehydratedFragment = 18; // hydrate 的 SuspenseComponent 组件
/**
 * React.js 中有导出
 * REACT_SUSPENSE_LIST_TYPE as SuspenseList
 * REACT_SCOPE_TYPE as unstable_Scope
 * REACT_OFFSCREEN_TYPE as unstable_Offscreen
 * REACT_LEGACY_HIDDEN_TYPE as unstable_LegacyHidden
 * REACT_CACHE_TYPE as unstable_Cache
 * REACT_TRACING_MARKER_TYPE as unstable_TracingMarker,
 * 这些种类，猜想下面的分类应该是和这些入口有关
 */
export const SuspenseListComponent = 19;
export const ScopeComponent = 21;
export const OffscreenComponent = 22;
export const LegacyHiddenComponent = 23;
export const CacheComponent = 24;
export const TracingMarkerComponent = 25;
