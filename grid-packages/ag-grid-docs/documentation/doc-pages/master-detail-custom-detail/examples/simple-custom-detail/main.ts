import { Grid, FirstDataRenderedEvent, GridOptions } from '@ag-grid-community/core'
import { DetailCellRenderer } from './detailCellRenderer_typescript'

const gridOptions: GridOptions = {
  masterDetail: true,
  detailRowCellComp: DetailCellRenderer,
  columnDefs: [
    // group cell renderer needed for expand / collapse icons
    { field: 'name', cellRendererComp: 'agGroupCellRenderer' },
    { field: 'account' },
    { field: 'calls' },
    { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
  ],
  defaultColDef: {
    flex: 1,
  },
  onFirstDataRendered: onFirstDataRendered,
}

function onFirstDataRendered(params: FirstDataRenderedEvent) {
  params.api.forEachNode(function (node) {
    node.setExpanded(node.id === '1')
  })
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(gridDiv, gridOptions)

  fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
    .then(response => response.json())
    .then(function (data) {
      gridOptions.api!.setRowData(data)
    })
})
