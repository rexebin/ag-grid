import { Grid, ColDef, ColumnPinnedEvent, ColumnState, GridOptions } from '@ag-grid-community/core'

const columnDefs: ColDef[] = [
  {
    lockPosition: true,
    valueGetter: 'node.rowIndex',
    cellClass: 'locked-col',
    width: 60,
    suppressNavigable: true,
  },
  {
    lockPosition: true,
    cellRenderer: controlsCellRenderer,
    cellClass: 'locked-col',
    width: 120,
    suppressNavigable: true,
  },
  { field: 'athlete' },
  { field: 'age' },
  { field: 'country' },
  { field: 'year' },
  { field: 'date' },
  { field: 'sport' },
  { field: 'gold' },
  { field: 'silver' },
  { field: 'bronze' },
  { field: 'total' },
]

const gridOptions: GridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    width: 150,
    resizable: true,
  },
  onColumnPinned: onColumnPinned,
  suppressDragLeaveHidesColumns: true,
}

function onColumnPinned(event: ColumnPinnedEvent) {
  const allCols = event.columnApi.getAllGridColumns()

  const allFixedCols = allCols.filter(col => col.getColDef().lockPosition)
  const allNonFixedCols = allCols.filter(col => !col.getColDef().lockPosition)

  const pinnedCount = allNonFixedCols.filter(col => col.getPinned() === 'left')
    .length

  const pinFixed = pinnedCount > 0

  const columnStates: ColumnState[] = []
  allFixedCols.forEach(col => {
    if (pinFixed !== col.isPinned()) {
      columnStates.push({
        colId: col.getId(),
        pinned: pinFixed ? 'left' : null,
      })
    }
  })

  if (columnStates.length > 0) {
    event.columnApi.applyColumnState({ state: columnStates })
  }
}

function onPinAthlete() {
  gridOptions.columnApi!.applyColumnState({
    state: [{ colId: 'athlete', pinned: 'left' }],
  })
}

function onUnpinAthlete() {
  gridOptions.columnApi!.applyColumnState({
    state: [{ colId: 'athlete', pinned: null }],
  })
}

// simple cell renderer returns dummy buttons. in a real application, a component would probably
// be used with operations tied to the buttons. in this example, the cell renderer is just for
// display purposes.
function controlsCellRenderer() {
  return '<button>A</button><button>B</button><button>C</button>'
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(gridDiv, gridOptions)

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then(data => gridOptions.api!.setRowData(data))
})
