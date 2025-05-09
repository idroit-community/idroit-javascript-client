# IDroitDashboardAdminApi.GroupsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsControllerConnectDidInfos**](GroupsApi.md#groupsControllerConnectDidInfos) | **PUT** /api/v1/groups/{id}/did-infos | グループへのDID情報紐付け
[**groupsControllerConnectUsers**](GroupsApi.md#groupsControllerConnectUsers) | **PUT** /api/v1/groups/{id}/users | グループへのユーザーアカウント紐付け
[**groupsControllerConnectVcInfos**](GroupsApi.md#groupsControllerConnectVcInfos) | **PUT** /api/v1/groups/{id}/vc-infos | グループへのVC情報紐付け
[**groupsControllerConnectVcSchema**](GroupsApi.md#groupsControllerConnectVcSchema) | **PUT** /api/v1/groups/{id}/vc-schemas | グループへのVCスキーマ紐付け
[**groupsControllerConnectVpInfos**](GroupsApi.md#groupsControllerConnectVpInfos) | **PUT** /api/v1/groups/{id}/vp-infos | グループへのVP情報紐付け
[**groupsControllerCreate**](GroupsApi.md#groupsControllerCreate) | **POST** /api/v1/groups | グループ作成
[**groupsControllerDisconnectDidInfo**](GroupsApi.md#groupsControllerDisconnectDidInfo) | **DELETE** /api/v1/groups/{id}/did-info/{did_info_id} | グループのDID情報紐付け解除
[**groupsControllerDisconnectUser**](GroupsApi.md#groupsControllerDisconnectUser) | **DELETE** /api/v1/groups/{id}/user/{user_id} | グループのユーザーアカウント紐付け解除
[**groupsControllerDisconnectVcInfo**](GroupsApi.md#groupsControllerDisconnectVcInfo) | **DELETE** /api/v1/groups/{id}/vc-info/{vc_info_id} | グループのVC情報紐付け解除
[**groupsControllerDisconnectVcSchema**](GroupsApi.md#groupsControllerDisconnectVcSchema) | **DELETE** /api/v1/groups/{id}/vc-schema/{vc_schema_id} | グループのVCスキーマ紐付け解除
[**groupsControllerDisconnectVpInfo**](GroupsApi.md#groupsControllerDisconnectVpInfo) | **DELETE** /api/v1/groups/{id}/vp-info/{vp_info_id} | グループのVP情報紐付け解除
[**groupsControllerFindAll**](GroupsApi.md#groupsControllerFindAll) | **GET** /api/v1/groups | グループ一覧取得
[**groupsControllerFindOne**](GroupsApi.md#groupsControllerFindOne) | **GET** /api/v1/groups/{id} | グループ詳細取得
[**groupsControllerRemove**](GroupsApi.md#groupsControllerRemove) | **DELETE** /api/v1/groups/{id} | グループ停止
[**groupsControllerUpdate**](GroupsApi.md#groupsControllerUpdate) | **PUT** /api/v1/groups/{id} | グループ更新

<a name="groupsControllerConnectDidInfos"></a>
# **groupsControllerConnectDidInfos**
> GroupResponseDto groupsControllerConnectDidInfos(body, id)

グループへのDID情報紐付け

グループにDID情報を紐付けます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let body = new IDroitDashboardAdminApi.ConnectDidInfosDto(); // ConnectDidInfosDto | 
let id = "id_example"; // String | 

apiInstance.groupsControllerConnectDidInfos(body, id, (error, data, response) => {
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
 **body** | [**ConnectDidInfosDto**](ConnectDidInfosDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsControllerConnectUsers"></a>
# **groupsControllerConnectUsers**
> GroupResponseDto groupsControllerConnectUsers(body, id)

グループへのユーザーアカウント紐付け

グループの所有者、関係者などの管理者としてユーザーアカウントを紐付けます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let body = new IDroitDashboardAdminApi.ConnectUsersDto(); // ConnectUsersDto | 
let id = "id_example"; // String | 

apiInstance.groupsControllerConnectUsers(body, id, (error, data, response) => {
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
 **body** | [**ConnectUsersDto**](ConnectUsersDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsControllerConnectVcInfos"></a>
# **groupsControllerConnectVcInfos**
> GroupResponseDto groupsControllerConnectVcInfos(body, id)

グループへのVC情報紐付け

グループにVC情報を紐付けます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let body = new IDroitDashboardAdminApi.ConnectVcInfosDto(); // ConnectVcInfosDto | 
let id = "id_example"; // String | 

apiInstance.groupsControllerConnectVcInfos(body, id, (error, data, response) => {
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
 **body** | [**ConnectVcInfosDto**](ConnectVcInfosDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsControllerConnectVcSchema"></a>
# **groupsControllerConnectVcSchema**
> GroupResponseDto groupsControllerConnectVcSchema(body, id)

グループへのVCスキーマ紐付け

グループにVCスキーマを紐付けます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let body = new IDroitDashboardAdminApi.ConnectVcSchemasDto(); // ConnectVcSchemasDto | 
let id = "id_example"; // String | 

apiInstance.groupsControllerConnectVcSchema(body, id, (error, data, response) => {
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
 **body** | [**ConnectVcSchemasDto**](ConnectVcSchemasDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsControllerConnectVpInfos"></a>
# **groupsControllerConnectVpInfos**
> GroupResponseDto groupsControllerConnectVpInfos(body, id)

グループへのVP情報紐付け

グループにVP情報を紐付けます。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let body = new IDroitDashboardAdminApi.ConnectVpInfosDto(); // ConnectVpInfosDto | 
let id = "id_example"; // String | 

apiInstance.groupsControllerConnectVpInfos(body, id, (error, data, response) => {
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
 **body** | [**ConnectVpInfosDto**](ConnectVpInfosDto.md)|  | 
 **id** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsControllerCreate"></a>
# **groupsControllerCreate**
> GroupResponseDto groupsControllerCreate(body)

グループ作成

グループ作成に成功しました。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let body = new IDroitDashboardAdminApi.CreateGroupDto(); // CreateGroupDto | 

apiInstance.groupsControllerCreate(body, (error, data, response) => {
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
 **body** | [**CreateGroupDto**](CreateGroupDto.md)|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="groupsControllerDisconnectDidInfo"></a>
# **groupsControllerDisconnectDidInfo**
> GroupResponseDto groupsControllerDisconnectDidInfo(id, didInfoId)

グループのDID情報紐付け解除

グループに紐付いたDID情報の紐付けを解除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let id = "id_example"; // String | 
let didInfoId = "didInfoId_example"; // String | 

apiInstance.groupsControllerDisconnectDidInfo(id, didInfoId, (error, data, response) => {
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
 **didInfoId** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupsControllerDisconnectUser"></a>
# **groupsControllerDisconnectUser**
> GroupResponseDto groupsControllerDisconnectUser(id, userId)

グループのユーザーアカウント紐付け解除

グループに紐付いたユーザーアカウントの紐付けを解除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let id = "id_example"; // String | 
let userId = "userId_example"; // String | 

apiInstance.groupsControllerDisconnectUser(id, userId, (error, data, response) => {
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
 **userId** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupsControllerDisconnectVcInfo"></a>
# **groupsControllerDisconnectVcInfo**
> GroupResponseDto groupsControllerDisconnectVcInfo(id, vcInfoId)

グループのVC情報紐付け解除

グループに紐付いたVC情報の紐付けを解除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let id = "id_example"; // String | 
let vcInfoId = "vcInfoId_example"; // String | 

apiInstance.groupsControllerDisconnectVcInfo(id, vcInfoId, (error, data, response) => {
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
 **vcInfoId** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupsControllerDisconnectVcSchema"></a>
# **groupsControllerDisconnectVcSchema**
> GroupResponseDto groupsControllerDisconnectVcSchema(id, vcSchemaId)

グループのVCスキーマ紐付け解除

グループに紐付いたVCスキーマの紐付けを解除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let id = "id_example"; // String | 
let vcSchemaId = "vcSchemaId_example"; // String | 

apiInstance.groupsControllerDisconnectVcSchema(id, vcSchemaId, (error, data, response) => {
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
 **vcSchemaId** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupsControllerDisconnectVpInfo"></a>
# **groupsControllerDisconnectVpInfo**
> GroupResponseDto groupsControllerDisconnectVpInfo(id, vpInfoId)

グループのVP情報紐付け解除

グループに紐付いたVP情報の紐付けを解除します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let id = "id_example"; // String | 
let vpInfoId = "vpInfoId_example"; // String | 

apiInstance.groupsControllerDisconnectVpInfo(id, vpInfoId, (error, data, response) => {
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
 **vpInfoId** | **String**|  | 

### Return type

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupsControllerFindAll"></a>
# **groupsControllerFindAll**
> GroupsResponseDto groupsControllerFindAll(opts)

グループ一覧取得

グループを一覧として値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let opts = { 
  'page': 1.2, // Number | (必須) ページネーションを表示する際のページ数に当たるクエリパラメーター。全件取得する際は1を指定。(デフォルト: 1)
  'limit': 1.2, // Number | (必須) ページネーションを表示する際のページ数あたりに表示する件数を指定するクエリパラメーター。全件取得する際は0を指定。(デフォルト: 10)
  'name': "name_example", // String | (任意)グループの名前。 例: \"Group Project1\"
  'status': "status_example" // String | (任意)グループのステータス。 例: \"active\"
};
apiInstance.groupsControllerFindAll(opts, (error, data, response) => {
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
 **name** | **String**| (任意)グループの名前。 例: \&quot;Group Project1\&quot; | [optional] 
 **status** | **String**| (任意)グループのステータス。 例: \&quot;active\&quot; | [optional] 

### Return type

[**GroupsResponseDto**](GroupsResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupsControllerFindOne"></a>
# **groupsControllerFindOne**
> GroupResponseDto groupsControllerFindOne(id)

グループ詳細取得

リクエストパラメータのidで指定された単一の管理者アカウントの詳細情報の値を返します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let id = "id_example"; // String | 

apiInstance.groupsControllerFindOne(id, (error, data, response) => {
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

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="groupsControllerRemove"></a>
# **groupsControllerRemove**
> groupsControllerRemove(id)

グループ停止

リクエストパラメータのidで指定された単一のグループを停止します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let id = "id_example"; // String | 

apiInstance.groupsControllerRemove(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="groupsControllerUpdate"></a>
# **groupsControllerUpdate**
> GroupResponseDto groupsControllerUpdate(id)

グループ更新

リクエストパラメータのidで指定された単一のグループ情報を更新します。

### Example
```javascript
import {IDroitDashboardAdminApi} from 'i_droit_dashboard_admin_api';
let defaultClient = IDroitDashboardAdminApi.ApiClient.instance;


let apiInstance = new IDroitDashboardAdminApi.GroupsApi();
let id = "id_example"; // String | 

apiInstance.groupsControllerUpdate(id, (error, data, response) => {
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

[**GroupResponseDto**](GroupResponseDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

