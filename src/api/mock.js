import Mock from 'mockjs'
import mockData from './mockData/mockdata.js'
Mock.mock('/sys/login', 'post', mockData.login())
Mock.mock(/\/sys\/profile/, 'get', mockData.profile())
export default Mock
