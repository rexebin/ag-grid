import { Grid, ColDef, FilterChangedEvent, FilterModifiedEvent, FilterOpenedEvent, GridOptions, IProvidedFilter } from '@ag-grid-community/core'

const columnDefs: ColDef[] = [
  {
    field: 'athlete',
    filterComp: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'age',
    maxWidth: 100,
    filterComp: 'agNumberColumnFilter',
    filterParams: {
      buttons: ['apply', 'reset'],
      closeOnApply: true,
    },
  },
  {
    field: 'country',
    filterComp: 'agSetColumnFilter',
    filterParams: {
      buttons: ['clear', 'apply'],
    },
  },
  {
    field: 'year',
    filterComp: 'agSetColumnFilter',
    filterParams: {
      buttons: ['apply', 'cancel'],
      closeOnApply: true,
    },
    maxWidth: 100,
  },
  { field: 'sport' },
  { field: 'gold', filterComp: 'agNumberColumnFilter' },
  { field: 'silver', filterComp: 'agNumberColumnFilter' },
  { field: 'bronze', filterComp: 'agNumberColumnFilter' },
  { field: 'total', filterComp: 'agNumberColumnFilter' },
]

const gridOptions: GridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    flex: 1,
    minWidth: 150,
    filter: true,
  },
  onFilterOpened: onFilterOpened,
  onFilterChanged: onFilterChanged,
  onFilterModified: onFilterModified,
}

function onFilterOpened(e: FilterOpenedEvent) {
  console.log('onFilterOpened', e)
}

function onFilterChanged(e: FilterChangedEvent) {
  console.log('onFilterChanged', e)
  console.log('gridApi.getFilterModel() =>', e.api.getFilterModel())
}

function onFilterModified(e: FilterModifiedEvent) {
  console.log('onFilterModified', e)
  console.log('filterInstance.getModel() =>', e.filterInstance.getModel())
  console.log(
    'filterInstance.getModelFromUi() =>',
    (e.filterInstance as unknown as IProvidedFilter).getModelFromUi()
  )
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  new Grid(gridDiv, gridOptions)

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then(data => gridOptions.api!.setRowData(data))
})
