import { Grid, GridOptions } from '@ag-grid-community/core'

var dateFilterParams = {
  filters: [
    {
      filterComp: 'agDateColumnFilter',
      filterParams: {
        comparator: function (filterDate: Date, cellValue: string) {
          if (cellValue == null) return -1

          return getDate(cellValue).getTime() - filterDate.getTime()
        },
      },
    },
    {
      filterComp: 'agSetColumnFilter',
      filterParams: {
        comparator: function (a: string, b: string) {
          return getDate(a).getTime() - getDate(b).getTime()
        },
      },
    },
  ],
}

const gridOptions: GridOptions = {
  columnDefs: [
    { field: 'athlete', filterComp: 'agMultiColumnFilter' },
    {
      field: 'country',
      filterComp: 'agMultiColumnFilter',
      filterParams: {
        filters: [
          {
            filterComp: 'agTextColumnFilter',
            filterParams: {
              defaultOption: 'startsWith',
            },
          },
          {
            filterComp: 'agSetColumnFilter',
          },
        ],
      },
    },
    {
      field: 'gold',
      filterComp: 'agMultiColumnFilter',
      filterParams: {
        filters: [
          {
            filterComp: 'agNumberColumnFilter',
          },
          {
            filterComp: 'agSetColumnFilter',
          },
        ],
      },
    },
    {
      field: 'date',
      filterComp: 'agMultiColumnFilter',
      filterParams: dateFilterParams,
    },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 200,
    resizable: true,
    menuTabs: ['filterMenuTab'],
  },
}

function getDate(value: string) {
  var dateParts = value.split('/')
  return new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0])
  )
}

var savedFilterState: Record<string, any>

function printState() {
  var filterState = gridOptions.api!.getFilterModel()
  console.log('Current filter state: ', filterState)
}

function saveState() {
  savedFilterState = gridOptions.api!.getFilterModel()
  console.log('Filter state saved')
}

function restoreState() {
  gridOptions.api!.setFilterModel(savedFilterState)
  console.log('Filter state restored')
}

function resetState() {
  gridOptions.api!.setFilterModel(null)
  console.log('Filter state reset')
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(gridDiv, gridOptions)

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then(data => gridOptions.api!.setRowData(data))
})
