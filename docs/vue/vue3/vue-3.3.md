---
lang: zh-CN
title: Vue 3.3
description: Vue 3.3
---

:::warning
需要 `vue 3.3.4+`
:::
# Vue 3.3

## 1. `defineProps`和`defineEmits`

- 之前 `defineProps` 和 `defineEmits` 的类型参数位置使用的类型仅限于本地类型，只支持类型字面量和接口

```ts
// before hi.vue
interface HiProps {
  msg: string
}
defineProps<HiProps>()

```
- 编译器现在可以解析导入的类型，并支持一组有限的复杂类型

```ts
// after hi.vue
import type { HiProps } from './hi'
defineProps<HiProps>()

// hi.d.ts
export interface HiProps {
  msg: string
}
```
- 还可以定义到全局的类型

```ts
// global.d.ts
export interface HiProps {
  msg: string
}

// hi.vue
defineProps<HiProps>()
```
### `Generic Components`

使用 `<script setup>` 的组件现在可以通过 `generic` 属性接受泛型类型参数

```ts {10,11}
// Generic.vue
<script setup lang="ts" generic="T,U extends string">
defineProps<{
  age: T
  name: U[]
}>()
</script>

// app.vue
<Generic :age="10" :name="['1', '2', '3']" />
<Generic age="10" :name="['1', '2', '3']" />
```

### More Ergonomic `defineEmits`

```ts
// BEFORE
// EmiterBefore.vue
const emit = defineEmits<{
  (e: 'foo', id: number): void
  (e: 'bar', name: string, ...rest: any[]): void
}>()

// App.vue
<EmiterBefore @foo="handleEmiterBeforeFoo" @bar="handleEmiterBeforeBar" />

const handleEmiterBeforeFoo = (id: number) => {
  console.log(id)
}
const handleEmiterBeforeBar = (name: string, ...rest: any[]) => {
  console.log(name, rest)
}

```

```ts
// AFTER
// EmiterAfter.vue
const emit = defineEmits<{
  foo: [id: number]
  bar: [name: string, ...rest: any[]]
}>()
```

## `defineSlots`

```vue
<script setup lang="ts">
defineSlots<{
  default?: (props: { msg: string }) => any
  item?: (props: { id: number }) => any
}>()
</script>

<template>
  <div>
    <slot msg="123"></slot>
    <slot name="item" :id="13"></slot>
  </div>
</template>
```

## `defineModle`

```vue
// before
<script setup lang="ts">
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement)?.value)
}
</script>

<template>
  <input :value="modelValue" @input="onInput" />
</template>

```

```vue
// after

<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
  <input v-model="modelValue" />
</template>

```