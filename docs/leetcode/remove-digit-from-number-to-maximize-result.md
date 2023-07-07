---
lang: zh-CN
title: 移除指定数字得到的最大结果
description: LeetCode
---

# 2259. 移除指定数字得到的最大结果

## 题目

给你一个表示某个正整数的字符串 `number` 和一个字符 `digit`

从 `number` 中 恰好 移除 一个 等于 `digit` 的字符后，找出并返回按 十进制 表示 最大 的结果字符串。生成的测试用例满足 `digit` 在 `number` 中出现至少一次。

## 例子

```
输入：number = "551", digit = "5"
输出："51"
解释：可以从 "551" 中移除第一个或者第二个 '5' 。
两种方案的结果都是 "51" 。
```

## 思路

`slice()`截取字符串,再拼接

## 题解

```ts
function removeDigit(number: string, digit: string): string {
  let res = "0";
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const temp = number.slice(0, i) + number.slice(i + 1);
      if (temp > res) res = temp;
    }
  }
  return res;
}
```
