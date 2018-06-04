import DiscussionActionTypes from "./DiscussionActionTypes";

export default {
    onTopicSelected: function (id) {
        return dispatch => dispatch({type: DiscussionActionTypes.NEW_DISCUSSION_SELECT_TOPIC, selectedId: id});
    },
    onLevelRangeChange: function (newValue, rangeType) {
        return dispatch => dispatch({type: DiscussionActionTypes.NEW_DISCUSSION_LEVEL_RANGE_CHANGE, newValue: newValue, rangeType: rangeType});
    },
    onDiscussionTextChange: function (newValue) {
        return dispatch => dispatch({type: DiscussionActionTypes.NEW_DISCUSSION_QUESTION_TEXT_CHANGE, newValue: newValue});
    },
    onNumberOfDebatersChange: function (newValue, typeOfDebater) {
        return dispatch => dispatch({type: DiscussionActionTypes.NEW_DISCUSSION_NUMBER_OF_DEBATERS_CHANGE, newValue: newValue, typeOfDebater: typeOfDebater})
    },
    onToggleSpectatorsAllowed: function () {
        return dispatch => dispatch({type: DiscussionActionTypes.NEW_DISCUSSION_TOGGLE_SPECTATORS_ALLOWED})
    },
    onDiscussionCreated: function (config) {
        return dispatch => dispatch({type: DiscussionActionTypes.NEW_DISCUSSION_CREATED_REQUEST})
    }
}