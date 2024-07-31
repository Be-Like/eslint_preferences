# ESLINT Configuration files

This repository contains my preferred linter rules and configurations. The linter libraries included in this repository
are:

- **@eslint/js** The standard eslint rules configured for JavaScript

- **eslint-plugin-jsdoc** The JSDoc linter plugin library

## JSDoc Linter

As noted above, the plugin used for this is `eslint-plugin-jsdoc`.

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

<!-- TODO: write up examples of errors and warnings -->
