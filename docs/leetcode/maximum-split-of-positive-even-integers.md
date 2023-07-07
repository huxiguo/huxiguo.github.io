---
lang: zh-CN
title: 拆分成最多数目的正偶数之和
description: LeetCode
---

# 2178 拆分成最多数目的正偶数之和

## 题目

给你一个整数 `finalSum` 请你将它拆分成若干个**互不相同**的正偶数和，而且拆分出来的正偶数数目**最多**

请返回一个整数数组，表示将整数拆分成最多正偶数数组，如果不能拆分，返回空数组，可以按任意顺序返回这些整数

## 例子

```
输入：finalSum = 28
输出：[6,8,2,12]
解释：以下是一些符合要求的拆分：(2 + 26)，(6 + 8 + 2 + 12) 和 (4 + 24)
(6 + 8 + 2 + 12) 有最多数目的整数，数目为 4 ，所以我们返回 [6,8,2,12]
[10,2,4,12] ，[6,2,4,16] 等等也都是可行的解
```

## 思路

1. 判断是否能分解，不能分解直接返回空数组
2. 将总数循环分成偶数，从 2 开始，直到分配的数大于目标数剩余的大小
3. 如果剩余的数大于 0 ，将其加入数组的最后一个

## 题解

```ts
function maximumEvenSplit(finalSum: number): number[] {
  // 奇数排除
  if (finalSum % 2 !== 0) return [];
  // 偶数，从2开始累加，每次+2
  let res: number[] = [];
  for (let i = 2; i <= finalSum; i += 2) {
    res.push(i);
    finalSum -= i;
  }
  // 将finalSum剩余的值全部填充进res 最后
  if (finalSum !== 0) res[res.length - 1] += finalSum;
  return res;
}
```
