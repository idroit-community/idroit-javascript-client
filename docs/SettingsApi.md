# IDroitDashboardAdminApi.SettingsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**settingsControllerFindAll**](SettingsApi.md#settingsControllerFindAll) | **GET** /api/v1/settings | Get all admins
[**settingsControllerFindOne**](SettingsApi.md#settingsControllerFindOne) | **GET** /api/v1/settings/{key} | Get a specific admin

<a name="settingsControllerFindAll"></a>
# **settingsControllerFindAll**
> SettingListResponseDto settingsControllerFindAll()

Get all admins

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.SettingsApi();
apiInstance.settingsControllerFindAll((error, data, response) => {
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

[**SettingListResponseDto**](SettingListResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="settingsControllerFindOne"></a>
# **settingsControllerFindOne**
> SettingResponseDto settingsControllerFindOne(key)

Get a specific admin

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.SettingsApi();
let key = "key_example"; // String | 

apiInstance.settingsControllerFindOne(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

[**SettingResponseDto**](SettingResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

