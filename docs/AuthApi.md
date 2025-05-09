# IDroitDashboardAdminApi.AuthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerGetProfile**](AuthApi.md#authControllerGetProfile) | **GET** /api/v1/auth/profile | ログイン済みのアカウント情報取得
[**authControllerLogin**](AuthApi.md#authControllerLogin) | **POST** /api/v1/auth/login | アカウントログインを実施

<a name="authControllerGetProfile"></a>
# **authControllerGetProfile**
> GetProfileResponseDto authControllerGetProfile()

ログイン済みのアカウント情報取得

ログイン済みの管理者アカウントの情報を返却します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.AuthApi();
apiInstance.authControllerGetProfile((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetProfileResponseDto**](GetProfileResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="authControllerLogin"></a>
# **authControllerLogin**
> SignInResponseDto authControllerLogin(body)

アカウントログインを実施

アカウントログインを実行し、認証結果に応じてJSON Web Tokenの値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.AuthApi();
let body = new IDroitDashboardAdminApi.SignInDto(); // SignInDto | 

apiInstance.authControllerLogin(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SignInDto**](SignInDto.md)|  | 

### Return type

[**SignInResponseDto**](SignInResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

