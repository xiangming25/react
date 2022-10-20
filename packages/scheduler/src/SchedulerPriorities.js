/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type PriorityLevel = 0 | 1 | 2 | 3 | 4 | 5;

// TODO: Use symbols?
// 没有优先级
export const NoPriority = 0;
// 立即执行任务的优先级，级别最高
export const ImmediatePriority = 1;
// 用户阻塞的优先级
export const UserBlockingPriority = 2;
// 正常的优先级
export const NormalPriority = 3;
// 低优先级
export const LowPriority = 4;
// 优先级最低，闲表示任务可以闲置
export const IdlePriority = 5;
