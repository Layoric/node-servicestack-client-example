/* Options:
Date: 2016-07-21 07:25:21
Version: 4.061
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://techstacks.io

//GlobalNamespace:
//ExportAsTypes: True
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
//IncludeTypes:
//ExcludeTypes:
//DefaultImports:
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TechnologyBase = (function () {
    function TechnologyBase() {
    }
    return TechnologyBase;
}());
exports.TechnologyBase = TechnologyBase;
var TechnologyStackBase = (function () {
    function TechnologyStackBase() {
    }
    return TechnologyStackBase;
}());
exports.TechnologyStackBase = TechnologyStackBase;
var QueryBase = (function () {
    function QueryBase() {
    }
    return QueryBase;
}());
exports.QueryBase = QueryBase;
var Technology = (function (_super) {
    __extends(Technology, _super);
    function Technology() {
        _super.apply(this, arguments);
    }
    return Technology;
}(TechnologyBase));
exports.Technology = Technology;
// @DataContract
var ResponseStatus = (function () {
    function ResponseStatus() {
    }
    return ResponseStatus;
}());
exports.ResponseStatus = ResponseStatus;
var TechStackDetails = (function (_super) {
    __extends(TechStackDetails, _super);
    function TechStackDetails() {
        _super.apply(this, arguments);
    }
    return TechStackDetails;
}(TechnologyStackBase));
exports.TechStackDetails = TechStackDetails;
var TechnologyHistory = (function (_super) {
    __extends(TechnologyHistory, _super);
    function TechnologyHistory() {
        _super.apply(this, arguments);
    }
    return TechnologyHistory;
}(TechnologyBase));
exports.TechnologyHistory = TechnologyHistory;
var QueryDb = (function (_super) {
    __extends(QueryDb, _super);
    function QueryDb() {
        _super.apply(this, arguments);
    }
    return QueryDb;
}(QueryBase));
exports.QueryDb = QueryDb;
var TechnologyStack = (function (_super) {
    __extends(TechnologyStack, _super);
    function TechnologyStack() {
        _super.apply(this, arguments);
    }
    return TechnologyStack;
}(TechnologyStackBase));
exports.TechnologyStack = TechnologyStack;
var TechnologyStackHistory = (function (_super) {
    __extends(TechnologyStackHistory, _super);
    function TechnologyStackHistory() {
        _super.apply(this, arguments);
    }
    return TechnologyStackHistory;
}(TechnologyStackBase));
exports.TechnologyStackHistory = TechnologyStackHistory;
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
var TechnologyInfo = (function () {
    function TechnologyInfo() {
    }
    return TechnologyInfo;
}());
exports.TechnologyInfo = TechnologyInfo;
// @DataContract
var Option = (function () {
    function Option() {
    }
    return Option;
}());
exports.Option = Option;
// @DataContract
var ResponseError = (function () {
    function ResponseError() {
    }
    return ResponseError;
}());
exports.ResponseError = ResponseError;
var TechnologyInStack = (function (_super) {
    __extends(TechnologyInStack, _super);
    function TechnologyInStack() {
        _super.apply(this, arguments);
    }
    return TechnologyInStack;
}(TechnologyBase));
exports.TechnologyInStack = TechnologyInStack;
var LogoUrlApprovalResponse = (function () {
    function LogoUrlApprovalResponse() {
    }
    return LogoUrlApprovalResponse;
}());
exports.LogoUrlApprovalResponse = LogoUrlApprovalResponse;
var LockStackResponse = (function () {
    function LockStackResponse() {
    }
    return LockStackResponse;
}());
exports.LockStackResponse = LockStackResponse;
var CreateTechnologyResponse = (function () {
    function CreateTechnologyResponse() {
    }
    return CreateTechnologyResponse;
}());
exports.CreateTechnologyResponse = CreateTechnologyResponse;
var UpdateTechnologyResponse = (function () {
    function UpdateTechnologyResponse() {
    }
    return UpdateTechnologyResponse;
}());
exports.UpdateTechnologyResponse = UpdateTechnologyResponse;
var DeleteTechnologyResponse = (function () {
    function DeleteTechnologyResponse() {
    }
    return DeleteTechnologyResponse;
}());
exports.DeleteTechnologyResponse = DeleteTechnologyResponse;
var CreateTechnologyStackResponse = (function () {
    function CreateTechnologyStackResponse() {
    }
    return CreateTechnologyStackResponse;
}());
exports.CreateTechnologyStackResponse = CreateTechnologyStackResponse;
var UpdateTechnologyStackResponse = (function () {
    function UpdateTechnologyStackResponse() {
    }
    return UpdateTechnologyStackResponse;
}());
exports.UpdateTechnologyStackResponse = UpdateTechnologyStackResponse;
var DeleteTechnologyStackResponse = (function () {
    function DeleteTechnologyStackResponse() {
    }
    return DeleteTechnologyStackResponse;
}());
exports.DeleteTechnologyStackResponse = DeleteTechnologyStackResponse;
var GetTechnologyPreviousVersionsResponse = (function () {
    function GetTechnologyPreviousVersionsResponse() {
    }
    return GetTechnologyPreviousVersionsResponse;
}());
exports.GetTechnologyPreviousVersionsResponse = GetTechnologyPreviousVersionsResponse;
var GetAllTechnologiesResponse = (function () {
    function GetAllTechnologiesResponse() {
    }
    return GetAllTechnologiesResponse;
}());
exports.GetAllTechnologiesResponse = GetAllTechnologiesResponse;
// @DataContract
var QueryResponse = (function () {
    function QueryResponse() {
    }
    return QueryResponse;
}());
exports.QueryResponse = QueryResponse;
var GetTechnologyResponse = (function () {
    function GetTechnologyResponse() {
    }
    return GetTechnologyResponse;
}());
exports.GetTechnologyResponse = GetTechnologyResponse;
var GetTechnologyFavoriteDetailsResponse = (function () {
    function GetTechnologyFavoriteDetailsResponse() {
    }
    return GetTechnologyFavoriteDetailsResponse;
}());
exports.GetTechnologyFavoriteDetailsResponse = GetTechnologyFavoriteDetailsResponse;
var GetTechnologyStackPreviousVersionsResponse = (function () {
    function GetTechnologyStackPreviousVersionsResponse() {
    }
    return GetTechnologyStackPreviousVersionsResponse;
}());
exports.GetTechnologyStackPreviousVersionsResponse = GetTechnologyStackPreviousVersionsResponse;
var GetPageStatsResponse = (function () {
    function GetPageStatsResponse() {
    }
    return GetPageStatsResponse;
}());
exports.GetPageStatsResponse = GetPageStatsResponse;
var OverviewResponse = (function () {
    function OverviewResponse() {
    }
    return OverviewResponse;
}());
exports.OverviewResponse = OverviewResponse;
var AppOverviewResponse = (function () {
    function AppOverviewResponse() {
    }
    return AppOverviewResponse;
}());
exports.AppOverviewResponse = AppOverviewResponse;
var GetAllTechnologyStacksResponse = (function () {
    function GetAllTechnologyStacksResponse() {
    }
    return GetAllTechnologyStacksResponse;
}());
exports.GetAllTechnologyStacksResponse = GetAllTechnologyStacksResponse;
var GetTechnologyStackResponse = (function () {
    function GetTechnologyStackResponse() {
    }
    return GetTechnologyStackResponse;
}());
exports.GetTechnologyStackResponse = GetTechnologyStackResponse;
var GetTechnologyStackFavoriteDetailsResponse = (function () {
    function GetTechnologyStackFavoriteDetailsResponse() {
    }
    return GetTechnologyStackFavoriteDetailsResponse;
}());
exports.GetTechnologyStackFavoriteDetailsResponse = GetTechnologyStackFavoriteDetailsResponse;
var GetConfigResponse = (function () {
    function GetConfigResponse() {
    }
    return GetConfigResponse;
}());
exports.GetConfigResponse = GetConfigResponse;
var GetFavoriteTechStackResponse = (function () {
    function GetFavoriteTechStackResponse() {
    }
    return GetFavoriteTechStackResponse;
}());
exports.GetFavoriteTechStackResponse = GetFavoriteTechStackResponse;
var FavoriteTechStackResponse = (function () {
    function FavoriteTechStackResponse() {
    }
    return FavoriteTechStackResponse;
}());
exports.FavoriteTechStackResponse = FavoriteTechStackResponse;
var GetFavoriteTechnologiesResponse = (function () {
    function GetFavoriteTechnologiesResponse() {
    }
    return GetFavoriteTechnologiesResponse;
}());
exports.GetFavoriteTechnologiesResponse = GetFavoriteTechnologiesResponse;
var FavoriteTechnologyResponse = (function () {
    function FavoriteTechnologyResponse() {
    }
    return FavoriteTechnologyResponse;
}());
exports.FavoriteTechnologyResponse = FavoriteTechnologyResponse;
var GetUserFeedResponse = (function () {
    function GetUserFeedResponse() {
    }
    return GetUserFeedResponse;
}());
exports.GetUserFeedResponse = GetUserFeedResponse;
var GetUserInfoResponse = (function () {
    function GetUserInfoResponse() {
    }
    return GetUserInfoResponse;
}());
exports.GetUserInfoResponse = GetUserInfoResponse;
// @DataContract
var AuthenticateResponse = (function () {
    function AuthenticateResponse() {
    }
    return AuthenticateResponse;
}());
exports.AuthenticateResponse = AuthenticateResponse;
// @DataContract
var AssignRolesResponse = (function () {
    function AssignRolesResponse() {
    }
    return AssignRolesResponse;
}());
exports.AssignRolesResponse = AssignRolesResponse;
// @DataContract
var UnAssignRolesResponse = (function () {
    function UnAssignRolesResponse() {
    }
    return UnAssignRolesResponse;
}());
exports.UnAssignRolesResponse = UnAssignRolesResponse;
// @Route("/admin/technology/{TechnologyId}/logo")
var LogoUrlApproval = (function () {
    function LogoUrlApproval() {
    }
    LogoUrlApproval.prototype.createResponse = function () { return new LogoUrlApprovalResponse(); };
    LogoUrlApproval.prototype.getTypeName = function () { return "LogoUrlApproval"; };
    return LogoUrlApproval;
}());
exports.LogoUrlApproval = LogoUrlApproval;
// @Route("/admin/techstacks/{TechnologyStackId}/lock")
var LockTechStack = (function () {
    function LockTechStack() {
    }
    LockTechStack.prototype.createResponse = function () { return new LockStackResponse(); };
    LockTechStack.prototype.getTypeName = function () { return "LockTechStack"; };
    return LockTechStack;
}());
exports.LockTechStack = LockTechStack;
// @Route("/admin/technology/{TechnologyId}/lock")
var LockTech = (function () {
    function LockTech() {
    }
    LockTech.prototype.createResponse = function () { return new LockStackResponse(); };
    LockTech.prototype.getTypeName = function () { return "LockTech"; };
    return LockTech;
}());
exports.LockTech = LockTech;
// @Route("/ping")
var Ping = (function () {
    function Ping() {
    }
    return Ping;
}());
exports.Ping = Ping;
// @Route("/{PathInfo*}")
var FallbackForClientRoutes = (function () {
    function FallbackForClientRoutes() {
    }
    return FallbackForClientRoutes;
}());
exports.FallbackForClientRoutes = FallbackForClientRoutes;
// @Route("/stacks")
var ClientAllTechnologyStacks = (function () {
    function ClientAllTechnologyStacks() {
    }
    return ClientAllTechnologyStacks;
}());
exports.ClientAllTechnologyStacks = ClientAllTechnologyStacks;
// @Route("/tech")
var ClientAllTechnologies = (function () {
    function ClientAllTechnologies() {
    }
    return ClientAllTechnologies;
}());
exports.ClientAllTechnologies = ClientAllTechnologies;
// @Route("/tech/{Slug}")
var ClientTechnology = (function () {
    function ClientTechnology() {
    }
    return ClientTechnology;
}());
exports.ClientTechnology = ClientTechnology;
// @Route("/users/{UserName}")
var ClientUser = (function () {
    function ClientUser() {
    }
    return ClientUser;
}());
exports.ClientUser = ClientUser;
// @Route("/technology", "POST")
var CreateTechnology = (function () {
    function CreateTechnology() {
    }
    CreateTechnology.prototype.createResponse = function () { return new CreateTechnologyResponse(); };
    CreateTechnology.prototype.getTypeName = function () { return "CreateTechnology"; };
    return CreateTechnology;
}());
exports.CreateTechnology = CreateTechnology;
// @Route("/technology/{Id}", "PUT")
var UpdateTechnology = (function () {
    function UpdateTechnology() {
    }
    UpdateTechnology.prototype.createResponse = function () { return new UpdateTechnologyResponse(); };
    UpdateTechnology.prototype.getTypeName = function () { return "UpdateTechnology"; };
    return UpdateTechnology;
}());
exports.UpdateTechnology = UpdateTechnology;
// @Route("/technology/{Id}", "DELETE")
var DeleteTechnology = (function () {
    function DeleteTechnology() {
    }
    DeleteTechnology.prototype.createResponse = function () { return new DeleteTechnologyResponse(); };
    DeleteTechnology.prototype.getTypeName = function () { return "DeleteTechnology"; };
    return DeleteTechnology;
}());
exports.DeleteTechnology = DeleteTechnology;
// @Route("/techstacks", "POST")
var CreateTechnologyStack = (function () {
    function CreateTechnologyStack() {
    }
    CreateTechnologyStack.prototype.createResponse = function () { return new CreateTechnologyStackResponse(); };
    CreateTechnologyStack.prototype.getTypeName = function () { return "CreateTechnologyStack"; };
    return CreateTechnologyStack;
}());
exports.CreateTechnologyStack = CreateTechnologyStack;
// @Route("/techstacks/{Id}", "PUT")
var UpdateTechnologyStack = (function () {
    function UpdateTechnologyStack() {
    }
    UpdateTechnologyStack.prototype.createResponse = function () { return new UpdateTechnologyStackResponse(); };
    UpdateTechnologyStack.prototype.getTypeName = function () { return "UpdateTechnologyStack"; };
    return UpdateTechnologyStack;
}());
exports.UpdateTechnologyStack = UpdateTechnologyStack;
// @Route("/techstacks/{Id}", "DELETE")
var DeleteTechnologyStack = (function () {
    function DeleteTechnologyStack() {
    }
    DeleteTechnologyStack.prototype.createResponse = function () { return new DeleteTechnologyStackResponse(); };
    DeleteTechnologyStack.prototype.getTypeName = function () { return "DeleteTechnologyStack"; };
    return DeleteTechnologyStack;
}());
exports.DeleteTechnologyStack = DeleteTechnologyStack;
// @Route("/my-session")
var SessionInfo = (function () {
    function SessionInfo() {
    }
    return SessionInfo;
}());
exports.SessionInfo = SessionInfo;
// @Route("/technology/{Slug}/previous-versions", "GET")
var GetTechnologyPreviousVersions = (function () {
    function GetTechnologyPreviousVersions() {
    }
    GetTechnologyPreviousVersions.prototype.createResponse = function () { return new GetTechnologyPreviousVersionsResponse(); };
    GetTechnologyPreviousVersions.prototype.getTypeName = function () { return "GetTechnologyPreviousVersions"; };
    return GetTechnologyPreviousVersions;
}());
exports.GetTechnologyPreviousVersions = GetTechnologyPreviousVersions;
// @Route("/technology", "GET")
var GetAllTechnologies = (function () {
    function GetAllTechnologies() {
    }
    GetAllTechnologies.prototype.createResponse = function () { return new GetAllTechnologiesResponse(); };
    GetAllTechnologies.prototype.getTypeName = function () { return "GetAllTechnologies"; };
    return GetAllTechnologies;
}());
exports.GetAllTechnologies = GetAllTechnologies;
// @Route("/technology/search")
// @AutoQueryViewer(Title="Find Technologies", Description="Explore different Technologies", IconUrl="octicon:database", DefaultSearchField="Tier", DefaultSearchType="=", DefaultSearchText="Data")
var FindTechnologies = (function (_super) {
    __extends(FindTechnologies, _super);
    function FindTechnologies() {
        _super.apply(this, arguments);
    }
    FindTechnologies.prototype.createResponse = function () { return new QueryResponse(); };
    FindTechnologies.prototype.getTypeName = function () { return "FindTechnologies"; };
    return FindTechnologies;
}(QueryDb));
exports.FindTechnologies = FindTechnologies;
// @Route("/technology/{Slug}")
var GetTechnology = (function () {
    function GetTechnology() {
    }
    GetTechnology.prototype.createResponse = function () { return new GetTechnologyResponse(); };
    GetTechnology.prototype.getTypeName = function () { return "GetTechnology"; };
    return GetTechnology;
}());
exports.GetTechnology = GetTechnology;
// @Route("/technology/{Slug}/favorites")
var GetTechnologyFavoriteDetails = (function () {
    function GetTechnologyFavoriteDetails() {
    }
    GetTechnologyFavoriteDetails.prototype.createResponse = function () { return new GetTechnologyFavoriteDetailsResponse(); };
    GetTechnologyFavoriteDetails.prototype.getTypeName = function () { return "GetTechnologyFavoriteDetails"; };
    return GetTechnologyFavoriteDetails;
}());
exports.GetTechnologyFavoriteDetails = GetTechnologyFavoriteDetails;
// @Route("/techstacks/{Slug}/previous-versions", "GET")
var GetTechnologyStackPreviousVersions = (function () {
    function GetTechnologyStackPreviousVersions() {
    }
    GetTechnologyStackPreviousVersions.prototype.createResponse = function () { return new GetTechnologyStackPreviousVersionsResponse(); };
    GetTechnologyStackPreviousVersions.prototype.getTypeName = function () { return "GetTechnologyStackPreviousVersions"; };
    return GetTechnologyStackPreviousVersions;
}());
exports.GetTechnologyStackPreviousVersions = GetTechnologyStackPreviousVersions;
// @Route("/pagestats/{Type}/{Slug}")
var GetPageStats = (function () {
    function GetPageStats() {
    }
    GetPageStats.prototype.createResponse = function () { return new GetPageStatsResponse(); };
    GetPageStats.prototype.getTypeName = function () { return "GetPageStats"; };
    return GetPageStats;
}());
exports.GetPageStats = GetPageStats;
// @Route("/techstacks/search")
// @AutoQueryViewer(Title="Find Technology Stacks", Description="Explore different Technology Stacks", IconUrl="material-icons:cloud", DefaultSearchField="Description", DefaultSearchType="Contains", DefaultSearchText="ServiceStack")
var FindTechStacks = (function (_super) {
    __extends(FindTechStacks, _super);
    function FindTechStacks() {
        _super.apply(this, arguments);
    }
    FindTechStacks.prototype.createResponse = function () { return new QueryResponse(); };
    FindTechStacks.prototype.getTypeName = function () { return "FindTechStacks"; };
    return FindTechStacks;
}(QueryDb));
exports.FindTechStacks = FindTechStacks;
// @Route("/overview")
var Overview = (function () {
    function Overview() {
    }
    Overview.prototype.createResponse = function () { return new OverviewResponse(); };
    Overview.prototype.getTypeName = function () { return "Overview"; };
    return Overview;
}());
exports.Overview = Overview;
// @Route("/app-overview")
var AppOverview = (function () {
    function AppOverview() {
    }
    AppOverview.prototype.createResponse = function () { return new AppOverviewResponse(); };
    AppOverview.prototype.getTypeName = function () { return "AppOverview"; };
    return AppOverview;
}());
exports.AppOverview = AppOverview;
// @Route("/techstacks", "GET")
var GetAllTechnologyStacks = (function () {
    function GetAllTechnologyStacks() {
    }
    GetAllTechnologyStacks.prototype.createResponse = function () { return new GetAllTechnologyStacksResponse(); };
    GetAllTechnologyStacks.prototype.getTypeName = function () { return "GetAllTechnologyStacks"; };
    return GetAllTechnologyStacks;
}());
exports.GetAllTechnologyStacks = GetAllTechnologyStacks;
// @Route("/techstacks/{Slug}", "GET")
var GetTechnologyStack = (function () {
    function GetTechnologyStack() {
    }
    GetTechnologyStack.prototype.createResponse = function () { return new GetTechnologyStackResponse(); };
    GetTechnologyStack.prototype.getTypeName = function () { return "GetTechnologyStack"; };
    return GetTechnologyStack;
}());
exports.GetTechnologyStack = GetTechnologyStack;
// @Route("/techstacks/{Slug}/favorites")
var GetTechnologyStackFavoriteDetails = (function () {
    function GetTechnologyStackFavoriteDetails() {
    }
    GetTechnologyStackFavoriteDetails.prototype.createResponse = function () { return new GetTechnologyStackFavoriteDetailsResponse(); };
    GetTechnologyStackFavoriteDetails.prototype.getTypeName = function () { return "GetTechnologyStackFavoriteDetails"; };
    return GetTechnologyStackFavoriteDetails;
}());
exports.GetTechnologyStackFavoriteDetails = GetTechnologyStackFavoriteDetails;
// @Route("/config")
var GetConfig = (function () {
    function GetConfig() {
    }
    GetConfig.prototype.createResponse = function () { return new GetConfigResponse(); };
    GetConfig.prototype.getTypeName = function () { return "GetConfig"; };
    return GetConfig;
}());
exports.GetConfig = GetConfig;
// @Route("/favorites/techtacks", "GET")
var GetFavoriteTechStack = (function () {
    function GetFavoriteTechStack() {
    }
    GetFavoriteTechStack.prototype.createResponse = function () { return new GetFavoriteTechStackResponse(); };
    GetFavoriteTechStack.prototype.getTypeName = function () { return "GetFavoriteTechStack"; };
    return GetFavoriteTechStack;
}());
exports.GetFavoriteTechStack = GetFavoriteTechStack;
// @Route("/favorites/techtacks/{TechnologyStackId}", "PUT")
var AddFavoriteTechStack = (function () {
    function AddFavoriteTechStack() {
    }
    AddFavoriteTechStack.prototype.createResponse = function () { return new FavoriteTechStackResponse(); };
    AddFavoriteTechStack.prototype.getTypeName = function () { return "AddFavoriteTechStack"; };
    return AddFavoriteTechStack;
}());
exports.AddFavoriteTechStack = AddFavoriteTechStack;
// @Route("/favorites/techtacks/{TechnologyStackId}", "DELETE")
var RemoveFavoriteTechStack = (function () {
    function RemoveFavoriteTechStack() {
    }
    RemoveFavoriteTechStack.prototype.createResponse = function () { return new FavoriteTechStackResponse(); };
    RemoveFavoriteTechStack.prototype.getTypeName = function () { return "RemoveFavoriteTechStack"; };
    return RemoveFavoriteTechStack;
}());
exports.RemoveFavoriteTechStack = RemoveFavoriteTechStack;
// @Route("/favorites/technology", "GET")
var GetFavoriteTechnologies = (function () {
    function GetFavoriteTechnologies() {
    }
    GetFavoriteTechnologies.prototype.createResponse = function () { return new GetFavoriteTechnologiesResponse(); };
    GetFavoriteTechnologies.prototype.getTypeName = function () { return "GetFavoriteTechnologies"; };
    return GetFavoriteTechnologies;
}());
exports.GetFavoriteTechnologies = GetFavoriteTechnologies;
// @Route("/favorites/technology/{TechnologyId}", "PUT")
var AddFavoriteTechnology = (function () {
    function AddFavoriteTechnology() {
    }
    AddFavoriteTechnology.prototype.createResponse = function () { return new FavoriteTechnologyResponse(); };
    AddFavoriteTechnology.prototype.getTypeName = function () { return "AddFavoriteTechnology"; };
    return AddFavoriteTechnology;
}());
exports.AddFavoriteTechnology = AddFavoriteTechnology;
// @Route("/favorites/technology/{TechnologyId}", "DELETE")
var RemoveFavoriteTechnology = (function () {
    function RemoveFavoriteTechnology() {
    }
    RemoveFavoriteTechnology.prototype.createResponse = function () { return new FavoriteTechnologyResponse(); };
    RemoveFavoriteTechnology.prototype.getTypeName = function () { return "RemoveFavoriteTechnology"; };
    return RemoveFavoriteTechnology;
}());
exports.RemoveFavoriteTechnology = RemoveFavoriteTechnology;
// @Route("/my-feed")
var GetUserFeed = (function () {
    function GetUserFeed() {
    }
    GetUserFeed.prototype.createResponse = function () { return new GetUserFeedResponse(); };
    GetUserFeed.prototype.getTypeName = function () { return "GetUserFeed"; };
    return GetUserFeed;
}());
exports.GetUserFeed = GetUserFeed;
// @Route("/userinfo/{UserName}")
var GetUserInfo = (function () {
    function GetUserInfo() {
    }
    GetUserInfo.prototype.createResponse = function () { return new GetUserInfoResponse(); };
    GetUserInfo.prototype.getTypeName = function () { return "GetUserInfo"; };
    return GetUserInfo;
}());
exports.GetUserInfo = GetUserInfo;
// @Route("/auth")
// @Route("/auth/{provider}")
// @Route("/authenticate")
// @Route("/authenticate/{provider}")
// @DataContract
var Authenticate = (function () {
    function Authenticate() {
    }
    Authenticate.prototype.createResponse = function () { return new AuthenticateResponse(); };
    Authenticate.prototype.getTypeName = function () { return "Authenticate"; };
    return Authenticate;
}());
exports.Authenticate = Authenticate;
// @Route("/assignroles")
// @DataContract
var AssignRoles = (function () {
    function AssignRoles() {
    }
    AssignRoles.prototype.createResponse = function () { return new AssignRolesResponse(); };
    AssignRoles.prototype.getTypeName = function () { return "AssignRoles"; };
    return AssignRoles;
}());
exports.AssignRoles = AssignRoles;
// @Route("/unassignroles")
// @DataContract
var UnAssignRoles = (function () {
    function UnAssignRoles() {
    }
    UnAssignRoles.prototype.createResponse = function () { return new UnAssignRolesResponse(); };
    UnAssignRoles.prototype.getTypeName = function () { return "UnAssignRoles"; };
    return UnAssignRoles;
}());
exports.UnAssignRoles = UnAssignRoles;
// @Route("/admin/technology/search")
// @AutoQueryViewer(Title="Find Technologies Admin", Description="Explore different Technologies", IconUrl="octicon:database", DefaultSearchField="Tier", DefaultSearchType="=", DefaultSearchText="Data")
var FindTechnologiesAdmin = (function (_super) {
    __extends(FindTechnologiesAdmin, _super);
    function FindTechnologiesAdmin() {
        _super.apply(this, arguments);
    }
    FindTechnologiesAdmin.prototype.createResponse = function () { return new QueryResponse(); };
    FindTechnologiesAdmin.prototype.getTypeName = function () { return "FindTechnologiesAdmin"; };
    return FindTechnologiesAdmin;
}(QueryDb));
exports.FindTechnologiesAdmin = FindTechnologiesAdmin;
//# sourceMappingURL=techstacks.dtos.js.map