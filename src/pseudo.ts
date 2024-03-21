/** https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes */
export default [

    // Element display state pseudo-classes
        
    "fullscreen", // Matches an element that is currently in fullscreen mode.
    "modal", // Matches an element that is in a state in which it excludes all interaction with elements outside it until the interaction has been dismissed.
    "picture-in-picture", // Matches an element that is currently in picture-in-picture mode.

    // Input pseudo-classes

    "autofill", // Matches when an <input> has been autofilled by the browser.
    "enabled", // Represents a user interface element that is in an enabled state.
    "disabled", // Represents a user interface element that is in a disabled state.
    "read-only", // Represents any element that cannot be changed by the user.
    "read-write", // Represents any element that is user-editable.
    "placeholder-shown", // Matches an input element that is displaying placeholder text. For example, it will match the placeholder attribute in the <input> and <textarea> elements.
    "default", // Matches one or more UI elements that are the default among a set of elements.
    "checked", // Matches when elements such as checkboxes and radio buttons are toggled on.
    "indeterminate", // Matches UI elements when they are in an indeterminate state.
    "blank", // Matches a user-input element which is empty, containing an empty string or other null input.
    "valid", // Matches an element with valid contents. For example, an input element with the type 'email' that contains a validly formed email address or an empty value if the control is not required.
    "invalid", // Matches an element with invalid contents. For example, an input element with type 'email' with a name entered.
    "in-range", // Applies to elements with range limitations. For example, a slider control when the selected value is in the allowed range.
    "out-of-range", // Applies to elements with range limitations. For example, a slider control when the selected value is outside the allowed range.
    "required", // Matches when a form element is required.
    "optional", // Matches when a form element is optional.
    "user-invalid", // Represents an element with incorrect input, but only when the user has interacted with it.

    // Location pseudo-classes

    "any-link", // Matches an element if the element would match either "link or ","visited",.
    "link", // Matches links that have not yet been visited.
    "visited", // Matches links that have been visited.
    "local-link", // Matches links whose absolute URL is the same as the target URL. For example, anchor links to the same page.
    "target", // Matches the element which is the target of the document URL.
    "target-within", // Matches elements which are the target of the document URL, but also elements which have a descendant which is the target of the document URL.
    "scope", // Represents elements that are a reference point for selectors to match against.

    // Resource state pseudo-classes

    "playing", // Represents a media element that is capable of playing when that element is playing.
    "paused", // Represents a media element that is capable of playing when that element is paused.

    // Time-dimensional pseudo-classes

    "current", // Represents the element or ancestor of the element that is being displayed.
    "past", // Represents an element that occurs entirely before the "current element",.
    "future", // Represents an element that occurs entirely after the "current element",.

    // Tree-structural pseudo-classes

    "root", // Represents an element that is the root of the document. In HTML this is usually the <html> element.
    "empty", // Represents an element with no children other than white-space characters.
    "nth-child", // Uses An+B notation to select elements from a list of sibling elements.
    "nth-last-child", // Uses An+B notation to select elements from a list of sibling elements, counting backwards from the end of the list.
    "first-child", // Matches an element that is the first of its siblings.
    "last-child", // Matches an element that is the last of its siblings.
    "only-child", // Matches an element that has no siblings. For example, a list item with no other list items in that list.
    "nth-of-type", // Uses An+B notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements.
    "nth-last-of-type", // Uses An+B notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements counting backwards from the end of the list.
    "first-of-type", // Matches an element that is the first of its siblings, and also matches a certain type selector.
    "last-of-type", // Matches an element that is the last of its siblings, and also matches a certain type selector.
    "only-of-type", // Matches an element that has no siblings of the chosen type selector.

    // User action pseudo-classes

    "hover", // Matches when a user designates an item with a pointing device, such as holding the mouse pointer over the item.
    "active", // Matches when an item is being activated by the user. For example, when the item is clicked on.
    "focus", // Matches when an element has focus.
    "focus-visible", // Matches when an element has focus and the user agent identifies that the element should be visibly focused.
    "focus-within", // Matches an element to which "focus applies",, plus any element that has a descendant to which "focus applies",.


    // parentheses are rather problematic
    // Linguistic pseudo-classes

    //"dir()", // The directionality pseudo-class selects an element based on its directionality as determined by the document language.
    //"lang()", // Select an element based on its content language.

    // These pseudo-classes accept a selector list or forgiving selector list as a parameter.

    //"is()", // The matches-any pseudo-class matches any element that matches any of the selectors in the list provided. The list is forgiving.
    //"not()", // The negation, or matches-none, pseudo-class represents any element that is not represented by its argument.
    //"where()", // The specificity-adjustment pseudo-class matches any element that matches any of the selectors in the list provided without adding any specificity weight. The list is forgiving.
    //"has()", // The relational pseudo-class represents an element if any of the relative selectors match when anchored against the attached element.
]