---
title: "Components"
---

You can create your own custom components to customise the behaviour of the grid. For example you can customise how cells are rendered, how values are edited and also create your own filters.

[[note]]
| How you register components changed in v27 (Jan 2022). See [Components v27 Changes](/components-v27-changes/) to learn about these changes.
| If you are new to AG Grid, ignore this message.

The full list of component types you can provide in AG Grid are as follows:

- [Cell Renderer](/component-cell-renderer/): To customises the contents of a cell.
- [Cell Editor](/component-cell-editor/): To customises editing of a cell.
- [Date Component](/component-date/): To customise the date selection component in the date filter.
- [Filter Component](/component-filter/): For custom column filter that appears inside the column menu.
- [Floating Filter](/component-floating-filter/): For custom column filter that appears inside the column menu.
- [Header Component](/component-header/): To customise the header of a column and column groups.
- [Loading Cell Renderer](/component-loading-cell-renderer/): To customise the loading cell row when using Server Side row model.
- [Overlay Component](/component-overlay/): To customise loading and no rows overlay components.
- [Status Bar Component](/component-status-bar/): For custom status bar components.
- [Tool Panel Component](/component-tool-panel/): For custom tool panel components.
- [Tooltip Component](/component-tooltip/): For custom cell tooltip components.

The remainder of this page gives information that is common across all the component types.

md-include:declare-vue.md
md-include:declare-angular.md

md-include:register-javascript.md
md-include:register-angular.md
md-include:register-react.md 
md-include:register-vue.md

md-include:advantages-vue.md

### Providing Additional Parameters

Each Custom Component gets a set of parameters from the grid. For example, for Cell Renderer the grid provides, among other things, the value to be rendered. You can provide additional properties to the Custom Component (e.g. what currency symbol to use) by providing additional parameters specific to your application.

To provide additional parameters, use the property `<prop-name>Params`.

<snippet spaceBetweenProperties="true">
const gridOptions = {
    columnDefs: [
        { 
            field: 'price',
            cellRendererComp: PriceCellRenderer,
            cellRendererParams: {
                currency: 'EUR'
            }
        },
    ],
}
</snippet>


### Component Usage

The below table gives a summary of the components, where they are configured and using what attribute.

| Component                     | Where                     | Attribute | 
| ----------------------------- | ------------------------- | ------------------------ | 
| Cell Renderer                 | Column Definition         | cellRendererComp<br/>cellRendererCompParams<br/>cellRendererCompSelector         | 
| Cell Editor                   | Column Definition         | cellEditorComp<br>cellEditorCompParams<br/>cellEditorCompSelector| 
| Filter                        | Column Definition         | filterComp<br/>filterCompParams              | 
| Floating Filter               | Column Definition         | floatingFilterComp<br/>floatingFilterCompParams       | 
| Header Component              | Column Definition         | headerComp<br/>headerCompParams               | 
| Header Group Component        | Column Definition         | headerGroupComp<br/>headerGroupCompParams         | 
| Tooltip Component             | Column Definition         | tooltipComp<br/>tooltipCompParams              | 
| Group Row Cell Renderer       | Grid Option               | groupRowCellComp<br/>groupRowCellCompParams         | 
| Group Row Inner Cell Renderer | Grid Option               | innerCellComp<br/>innerCellCompParams            | 
| Detail Cell Renderer          | Grid Option               | detailRowCellComp<br/>detailRowCellCompParams        | 
| Full Width Cell Renderer      | Grid Option               | fullWidthCellComp<br/>fullWidthCellCompParams        | 
| Loading Cell Renderer         | Grid Option               | loadingRowCellComp<br/>loadingRowCellCompParams       |
| Loading Overlay               | Grid Option               | loadingOverlayComp<br/>loadingOverlayCompParams       | 
| No Rows Overlay               | Grid Option               | noRowsOverlayComp<br/>noRowsOverlayCompParams        |
| Date Component                | Grid Option               | dateComp<br/>dateCompParams                  | 
| Status Bar Component          | Grid Option -> Status Bar | statusPanelComp<br/>statusPanelCompParams          | 
| Tool Panel                    | Grid Option -> Side Bar   | toolPanelComp<br/>toolPanelCompParams            | 

md-include:js-fw-angular.md
md-include:js-fw-react.md
md-include:js-fw-vue.md
md-include:js-fw-common-end.md

## Grid Provided Components

The grid comes with pre-registered components that can be used. Each component provided by the grid starts with the namespaces 'ag' to minimise naming conflicts with user provided components. The full list of grid provided components are in the table below.

<table>
    <thead>
        <tr>
            <th colspan="2"><h3>Date Inputs</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>agDateInput</td>
            <td>Default date input used by filters.</td>
        </tr>
        <tr>
            <td colspan="2"><h3>Column Headers</h3></td>
        </tr>
        <tr>
            <td>agColumnHeader</td>
            <td>Default column header.</td>
        </tr>
        <tr>
            <td>agColumnHeaderGroup</td>
            <td>Default column group header.</td>
        </tr>
        <tr>
            <td colspan="2"><h3>Column Filters</h3></td>
        </tr>
        <tr>
            <td>agSetColumnFilter</td>
            <td>Set filter (default when using AG Grid Enterprise).</td>
        </tr>
        <tr>
            <td>agTextColumnFilter</td>
            <td>Simple text filter (default when using AG Grid Community).</td>
        </tr>
        <tr>
            <td>agNumberColumnFilter</td>
            <td>Number filter.</td>
        </tr>
        <tr>
            <td>agDateColumnFilter</td>
            <td>Date filter.</td>
        </tr>
        <tr>
            <td colspan="2"><h3>Floating Filters</h3></td>
        </tr>
        <tr>
            <td>agSetColumnFloatingFilter</td>
            <td>Floating set filter.</td>
        </tr>
        <tr>
            <td>agTextColumnFloatingFilter</td>
            <td>Floating text filter.</td>
        </tr>
        <tr>
            <td>agNumberColumnFloatingFilter</td>
            <td>Floating number filter.</td>
        </tr>
        <tr>
            <td>agDateColumnFloatingFilter</td>
            <td>Floating date filter.</td>
        </tr>
        <tr>
            <td colspan="2"><h3>Cell Renderers</h3></td>
        </tr>
        <tr>
            <td>agAnimateShowChangeCellRenderer</td>
            <td>Cell renderer that animates value changes.</td>
        </tr>
        <tr>
            <td>agAnimateSlideCellRenderer</td>
            <td>Cell renderer that animates value changes.</td>
        </tr>
        <tr>
            <td>agGroupCellRenderer</td>
            <td>Cell renderer for displaying group information.</td>
        </tr>
        <tr>
            <td>agLoadingCellRenderer</td>
            <td>Cell editor for loading row when using Enterprise row model.</td>
        </tr>
        <tr>
            <td colspan="2"><h3>Overlays</h3></td>
        </tr>
        <tr>
            <td>agLoadingOverlay</td>
            <td>Loading overlay.</td>
        </tr>
        <tr>
            <td>agNoRowsOverlay</td>
            <td>No rows overlay.</td>
        </tr>
        <tr>
            <td colspan="2"><h3>Cell Editors</h3></td>
        </tr>
        <tr>
            <td>agTextCellEditor</td>
            <td>Text cell editor.</td>
        </tr>
        <tr>
            <td>agSelectCellEditor</td>
            <td>Select cell editor.</td>
        </tr>
        <tr>
            <td>agRichSelectCellEditor<enterprise-icon></enterprise-icon></td>
            <td>Rich select editor.</td>
        </tr>
        <tr>
            <td>agPopupTextCellEditor</td>
            <td>Popup text cell editor.</td>
        </tr>
        <tr>
            <td>agPopupSelectCellEditor</td>
            <td>Popup select cell editor.</td>
        </tr>
        <tr>
            <td>agLargeTextCellEditor</td>
            <td>Large text cell editor.</td>
        </tr>
        <tr>
            <td colspan="2"><h3>Master Detail</h3></td>
        </tr>
        <tr>
            <td>agDetailCellRenderer<enterprise-icon></enterprise-icon></td>
            <td>Detail panel for master / detail grid.</td>
        </tr>
    </tbody>
</table>

### Overriding Grid Components

It is also possible to override components. Where the grid uses a default value, this means the override component will be used instead. The default components, where overriding makes sense, are as follows:

- **agDateInput**: To change the default date selection across all filters.
- **agColumnHeader**: To change the default column header across all columns.
- **agColumnGroupHeader**: To change the default column group header across all columns.
- **agLoadingCellRenderer**: To change the default loading cell renderer for Enterprise Row Model.
- **agLoadingOverlay**: To change the default 'loading' overlay.
- **agNoRowsOverlay**: To change the default loading 'no rows' overlay.
- **agTextCellEditor**: To change the default text cell editor. 
- **agDetailCellRenderer**: To change the default detail panel for master / detail grids.
 
[[only-vue]]
|[[note]]
||Overridable grid components are the only components you need to additionally specify with `frameworkComponents` in order to tie their usage to the 
||actual component. All other registration types specify their usage in column definitions or on the `AgGridVue` component itself.
||
||For an example of this please refer to the [Date Component](../component-date/#registering-date-components) documentation.
