# ESLINT Configuration files

This repository contains my preferred linter rules and configurations. The linter libraries included in this repository
are:

- **@eslint/js** The standard eslint rules configured for JavaScript
- **eslint-plugin-jsdoc** The JSDoc linter plugin library
- **@stylistic/eslint-plugin-js** The styling linter plugin library
- **eslint-plugin-vue** The Vue specific linter plugin library

Note: I spent a lot of time going through each rule to make sure everything was set to what I personally consider to be
of value. The main difference you may see in my configuration vs what you might see in the default or recommended
settings from the libraries or plugins themselves is that these libraries generally seem to set everything to error out
as opposed to throwing warnings. I found this extremely confusing because so many of the rules are opinionated - as
opposed to actually catching a flaw in the code. In my mind, if something is an opinion of another person, then those
shouldn't display errors to the end user - they should throw warnings because the code is valid, but the issue at hand
is that what the user is implementing is inconsistent with the opinions that have been set for the team or project being
worked on.

## ESLint (JavaScript)

Library: `@eslint/js`

This is the standard JavaScript linting library used to set rules and standards to be used throughout a project. Many
of these rules can be opinionated and are open to discussion within teams and organizations. Below are the rules that I
generally followed for these configurations:

- Rules that are meant to indicate to the user that what they are doing is wrong and generally will not function
properly are generally set to `error` - as commonly indicated by the error location being underscored by a red squiggly.
These rules are generally not open for discussion - with the exception of some that may be meant for more recent 
JavaScript standards where you may want to disable or alter the rule logic if you are using an older JavaScript 
standard (eg. ES5).
- Rules that are generally more opinionated or open for discussion are generally set to `warning` - as commonly
indicated by the warning location being underscored by a yellow squiggly. These rules are generally more open for debate
and should be modified to meet the needs of your team or the project that you are working on. These also tend to have
far more configuration options available.

## JSDoc Linter

Library: `eslint-plugin-jsdoc`.

This is a linter plugin specifically used to set rules and standards that assist with writing clear and consistent
inline JavaScript documentation (JSDocs).

These rules used to exist in the standard @eslint library but were extracted into it's own plugin with the
introduction of the "flat config". The rules that used to exist within the @eslint library have been deprecated
and now point to the JSDoc plugin.

The general approach to setting these rules were as follows:

- Rules that are considered to indicate that what the user is doing is invalid are generally set to display
  an `error` to the user - errors are generally indicated by a red line underscoring the general location for the error.
  This is done to help the user recognize an actual flaw in what is being documented. They are errors and should be
  addressed as such.

- Rules that are considered to be opinionated by myself are generally set to display a `warning` to the user - warnings
  are generally indicated by a yellow line underscoring the general location for the warning. Warnings can be considered
  as generally harmless, but are considered to indicate inconsistency.

## Styling Linter

Library: `@stylistic/eslint-plugin-js`

This is a plugin that allows you to set rules that are almost strictly opinionated by each individual. While there are
many correct ways of accomplishing something, setting these rules will provide consistency in terms of how your code
should be formatted. Things like whether or not your variable assignments or function calls should end with a `;`, for
example. 

This linter plugin is meant to replace tools like Prettier - tools that are generally far more opinionated and provide
little control for altering their predefined rules and formats. It provides near absolute control over styling 
preferences, and can be quite overwhelming.

The benefit of tools like Prettier is that because they are far more opinionated, if you decide to go with them then
it closes you and your team off from needing to have those "hard" discussions about whether or not a variable
assignment should end with a `;` - because you have far less control. Although, Prettier does let you configure that 
that specific rule, so that's just me being a little facetious.

Because most of these linter rules are very, **very** opinionated, the vast majority of these rules have been configured
to report `warnings` as opposed to actual errors - because the code will still function properly and without side effect
even if the user ignores the warnings being thrown. 

## Vue Linter

Library: `eslint-plugin-vue`

This is a plugin to that allows you to configure linter rules for Vue specific projects. This plugin consists of an 
equal number of opinionated rules (`template` then `script` vs `script` then `template` for example) as it does actual
error based rules. 

As with the other libraries or plugins, my approach to setting these rules are as follows:
- Rules that are considered to indicate that what the user is doing is invalid is generally set to display an `error` to
the user - errors are generally indicated by a red line underscoring the general location for the error. These are 
errors and should be addressed as such.
- Rules that are considered more opinionated are generally set to display a `warning` to the user - warnings are
generally indicated by a yellow line underscoring the general location for the warning. Warnings can be considered as
generally harmless, but are considered to indicate inconsistency.
