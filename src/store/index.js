// 组合子模块 导入 store 实例

import billReducer from './modules/billStore'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        bill: billReducer
    }
})

export default store