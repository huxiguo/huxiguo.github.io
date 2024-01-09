# 如何理解 ref、toRef 和 toRefs

## ref 是什么

- 生成值类型的响应式数据
- 可用于模板和 reactive
- 通过 .value 修改值
- 通过 ref 获取 dom

```vue
<script setup lang="ts">
import { ref,reactive,onMounted } from 'vue'

// 值类型 响应式
const nameRef = ref<string>('hu.')
const ageRef = ref<number>(20)

const state = reactive({
  name: nameRef,
  age: ageRef
})

// 通过 ref 获取 dom 元素
const elemRef = ref<HTMLParagraphElement>(null)

// 通过 .value 获取值修改值
setTimeout(()=>{
  console.log('ageRef', ageRef.value)
  ageRef.value = 25 // .value 修改值
  nameRef.value = 'hu. A'
})
onMounted(() => {
  console.log('elemRef', elemRef.value.innerHTML)
})
</script>

<template>
  <p ref="elemRef">ref demo {{ nameRef }}---{{ state.age }}</p>
</template>
```

## toRef 是什么

- 针对一个响应式对象（reactive 封装）的 prop（属性）
- 创建一个 ref，具有响应式
- 两者保持引用关系

```vue
<script setup lang="ts">
import { toRef,reactive } from 'vue'


const state = reactive({
  name: 'zs',
  age: 18
})

// toRef 如果用于非响应式对象，产出的结果不具备响应式
// const state = {
//   name: 'ls.',
//   age: 20
// }

const ageRef = toRef(state, 'age')

setTimeout(()=>{
  state.age=20
},1000)

setTimeout(()=>{
  ageRef.value=26
},2000)
</script>

<template>
  <p ref="elemRef">toRef demo {{ state.name }}{{ state.age }} - {{ ageRef }}</p>
</template>

```

## toRefs 是什么

- 将响应是对象（reactive 封装）转为普通对象
- 对象的每个 prop（属性） 都是对应的 ref
- 两者保持引用关系

```vue
<script setup lang="ts">
import { toRefs,reactive } from 'vue'


const state = reactive({
  name: 'zs',
  age: 18
})


// 将响应式对象变为普通对象，同时保留响应式
const stateAsRefs = toRefs(state)

const {name, age} = stateAsRefs

setTimeout(()=>{
  state.age=20
},1000)
</script>

<template>
  <p ref="elemRef">toRefs demo {{ name }} {{ age }}</p>
</template>

```