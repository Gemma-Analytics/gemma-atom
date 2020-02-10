# gemma-atom package

This package is created to boost productivity with Atom at Gemma Analytics. We work extensively with [dbt](https://www.getdbt.com/) and this packages' content reflect it. It is generally assumed that a user of this package also uses the `atom-dbt` package.

## Commands ##

### Turn to reference ###

Command: CTRL + ALT + j

Turn selected text to a reference, like so:

Selected text: `schema.table` or `table` (e.g. `bijan_dbt.fact_sales`)

Result: `{{ ref('table') }}` / `{{ ref('fact_sales') }}`

This is useful to convert queries written in a query editor to dbt models.
