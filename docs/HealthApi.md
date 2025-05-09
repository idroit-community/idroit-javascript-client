# IDroitDashboardAdminApi.HealthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appControllerHealth**](HealthApi.md#appControllerHealth) | **GET** /api/v1/health | ヘルスチェック

<a name="appControllerHealth"></a>
# **appControllerHealth**
> appControllerHealth()

ヘルスチェック

ヘルスチェック

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';

let apiInstance = new IDroitDashboardAdminApi.HealthApi();
apiInstance.appControllerHealth((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

