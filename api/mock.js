import mock from 'mickjs'
import homeApi from  './mockServeDate/home'
import userApi from './mockServeDate/user'
import permissionApi from './mockServeDate/permission'

mock.mock('./home/getDate',homeApi.getStatisticalData)
mock.mock(/user\/add/, 'post', userApi.createUser)
mock.mock(/user\/edit/, 'post', userApi.createUser)
mock.mock(/user\/getUser/, 'get', userApi.getUserList)
mock.mock(/user\/del/, 'post', userApi.deleteUser)
mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)