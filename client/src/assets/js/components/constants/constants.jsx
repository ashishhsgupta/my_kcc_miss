
export const PORTAL_NAME = "Grocery store";
export const MIN_LENGTH = 2;
export const MAX_LENGTH = 20;
export const MAX_NAME_LENGTH = 50;
export const MAX_PWD_LENGTH = 100;

export const GENERIC_NOTE_SMS = {
    INFO_MSG : "InfoMsg",
    SUCCESS_MSG : "SuccessMsg",
    WARN_MSG : "WarnMsg",
    ERROR_MSG : "ErrorMsg",
    OTP_SEND_MSG : "OtpSendMsg"
}

export const EDIT_ACTION = "edit-action";
export const DELETE_ACTION = "delete-action";
export const VIEW_ACTION = "view-action";
export const RESET_ACTION = "reset-action";
export const REVIEW_ACTION = "review-action";
export const PREVIEW_ACTION = "review-action";
export const ERROR_ACTION = "error-action";
export const REJECT_ACTION = "reject-action";
export const APPROVED_ACTION = "approved-action"

export const DATA_LIST_ACTION = {
    EDIT: {
        displayName:"EDIT",
        action:EDIT_ACTION
    },
    DELETE:{
        displayName:"DELETE",
        action:DELETE_ACTION
    },
    VIEW:{
        displayName:"VIEW",
        action:VIEW_ACTION
    },
    RESET:{
        displayName:"RESET",
        action:RESET_ACTION
    },
    REVIEW:{
        displayName:"REVIEW",
        action:REVIEW_ACTION
    },
    PREVIEW:{
        displayName:"PREVIEW",
        action:PREVIEW_ACTION
    },
    ERROR:{
        displayName:"ERROR",
        action:ERROR_ACTION
    },
    REJECT:{
        displayName:"REJECT",
        action:REJECT_ACTION
    },
    APPROVED:{
        displayName:"APPROVE",
        action:APPROVED_ACTION
    }
}

export const STATUS_TYPE  = {
    PENDING_STATUS : "pendingStatus",
    DRAFT_STATUS : "draftStatus",
    EDIT_STATUS : "editStatus",
    APPROVED_STATUS : "approvedStatus",
    REJECT_STATUS : "rejectStatu",
    REVIEW_STATUS : "reviewStatus",
    VIEW_STATUS : "viewStatus",
    PREVIEW_STATUS : "previewStatus",
    DELETE_STATUS : "deleteStatus",
    ERROR_STATUS : "errorStatus"
}

export const ORG_USER_ROLE = 1;
export const ORG_ADMIN_ROLE = 2
