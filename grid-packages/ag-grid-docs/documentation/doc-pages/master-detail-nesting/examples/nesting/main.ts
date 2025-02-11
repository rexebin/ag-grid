import { Grid, GridOptions, IDetailCellRendererParams } from '@ag-grid-community/core'

var rowData = [
  {
    a1: 'level 1 - 111',
    b1: 'level 1 - 222',
    children: [
      {
        a2: 'level 2 - 333',
        b2: 'level 2 - 444',
        children: [
          { a3: 'level 3 - 5551', b3: 'level 3 - 6661' },
          { a3: 'level 3 - 5552', b3: 'level 3 - 6662' },
          { a3: 'level 3 - 5553', b3: 'level 3 - 6663' },
          { a3: 'level 3 - 5554', b3: 'level 3 - 6664' },
          { a3: 'level 3 - 5555', b3: 'level 3 - 6665' },
          { a3: 'level 3 - 5556', b3: 'level 3 - 6666' },
        ],
      },
    ],
  },
  {
    a1: 'level 1 - 111',
    b1: 'level 1 - 222',
    children: [
      {
        a2: 'level 2 - 333',
        b2: 'level 2 - 444',
        children: [
          { a3: 'level 3 - 5551', b3: 'level 3 - 6661' },
          { a3: 'level 3 - 5552', b3: 'level 3 - 6662' },
          { a3: 'level 3 - 5553', b3: 'level 3 - 6663' },
          { a3: 'level 3 - 5554', b3: 'level 3 - 6664' },
          { a3: 'level 3 - 5555', b3: 'level 3 - 6665' },
          { a3: 'level 3 - 5556', b3: 'level 3 - 6666' },
        ],
      },
    ],
  },
]

// level 1 grid options
const gridOptions: GridOptions = {
  rowData: rowData,
  columnDefs: [
    { field: 'a1', cellRendererComp: 'agGroupCellRenderer' },
    { field: 'b1' },
  ],
  defaultColDef: {
    flex: 1,
  },
  groupDefaultExpanded: 1,
  masterDetail: true,
  detailCellRendererParams: {
    // level 2 grid options
    detailGridOptions: {
      columnDefs: [
        { field: 'a2', cellRendererComp: 'agGroupCellRenderer' },
        { field: 'b2' },
      ],
      defaultColDef: {
        flex: 1,
      },
      groupDefaultExpanded: 1,
      masterDetail: true,
      detailRowHeight: 240,
      detailCellRendererParams: {
        // level 3 grid options
        detailGridOptions: {
          columnDefs: [
            { field: 'a3', cellRendererComp: 'agGroupCellRenderer' },
            { field: 'b3' },
          ],
          defaultColDef: {
            flex: 1,
          },
        },
        getDetailRowData: function (params) {
          params.successCallback(params.data.children)
        },
      } as IDetailCellRendererParams,
    },
    getDetailRowData: function (params) {
      params.successCallback(params.data.children)
    },
  } as IDetailCellRendererParams,
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(gridDiv, gridOptions)
})
