# IDroitDashboardAdminApi.VcSchemasApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vcSchemasControllerCreate**](VcSchemasApi.md#vcSchemasControllerCreate) | **POST** /api/v1/vc-schemas | 新規VCスキーマ作成
[**vcSchemasControllerFindAll**](VcSchemasApi.md#vcSchemasControllerFindAll) | **GET** /api/v1/vc-schemas | VCスキーマ一覧取得
[**vcSchemasControllerFindOne**](VcSchemasApi.md#vcSchemasControllerFindOne) | **GET** /api/v1/vc-schemas/{id} | VCスキーマ情報詳細取得
[**vcSchemasControllerUpdate**](VcSchemasApi.md#vcSchemasControllerUpdate) | **PUT** /api/v1/vc-schemas/{id} | VCスキーマへのグループ紐付け

<a name="vcSchemasControllerCreate"></a>
# **vcSchemasControllerCreate**
> VcSchemaResponseDto vcSchemasControllerCreate(body)

新規VCスキーマ作成

新規VCスキーマを作成します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcSchemasApi();
let body = new IDroitDashboardAdminApi.CreateVcSchemaDto(); // CreateVcSchemaDto | 

apiInstance.vcSchemasControllerCreate(body, (error, data, response) => {
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
 **body** | [**CreateVcSchemaDto**](CreateVcSchemaDto.md)|  | 

### Return type

[**VcSchemaResponseDto**](VcSchemaResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="vcSchemasControllerFindAll"></a>
# **vcSchemasControllerFindAll**
> VcSchemasResponseDto vcSchemasControllerFindAll(opts)

VCスキーマ一覧取得

VCスキーマを一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcSchemasApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2, // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
  'title': "title_example", // String | (任意) 例: \"Schema Sample\"
  'version': "version_example", // String | (任意) 例: \"1.0.0\"
  'description': "description_example", // String | (任意) 例: 
  'isBadgeSchema': true // Boolean | (任意) 例: true
};
apiInstance.vcSchemasControllerFindAll(opts, (error, data, response) => {
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
 **page** | **Number**| (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1) | [optional] 
 **limit** | **Number**| (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10) | [optional] 
 **title** | **String**| (任意) 例: \&quot;Schema Sample\&quot; | [optional] 
 **version** | **String**| (任意) 例: \&quot;1.0.0\&quot; | [optional] 
 **description** | **String**| (任意) 例:  | [optional] 
 **isBadgeSchema** | **Boolean**| (任意) 例: true | [optional] 

### Return type

[**VcSchemasResponseDto**](VcSchemasResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vcSchemasControllerFindOne"></a>
# **vcSchemasControllerFindOne**
> VcSchemaResponseDto vcSchemasControllerFindOne(id)

VCスキーマ情報詳細取得

リクエストパラメータのidで指定された単一のVCスキーマの詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcSchemasApi();
let id = "id_example"; // String | 

apiInstance.vcSchemasControllerFindOne(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**VcSchemaResponseDto**](VcSchemaResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vcSchemasControllerUpdate"></a>
# **vcSchemasControllerUpdate**
> VcSchemaResponseDto vcSchemasControllerUpdate(body, id)

VCスキーマへのグループ紐付け

VCスキーマに関連するグループを紐付けます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.VcSchemasApi();
let body = new IDroitDashboardAdminApi.UpdateVcSchemaDto(); // UpdateVcSchemaDto | 
let id = "id_example"; // String | 

apiInstance.vcSchemasControllerUpdate(body, id, (error, data, response) => {
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
 **body** | [**UpdateVcSchemaDto**](UpdateVcSchemaDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**VcSchemaResponseDto**](VcSchemaResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

