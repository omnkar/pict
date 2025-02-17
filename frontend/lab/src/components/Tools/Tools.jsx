import React from 'react'
import './Tools.css'
const Tools = () => {
  return (
    <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h3 class="section-title">Patrons and circulation</h3>
        <ul>
          <li><a href="#">Patron lists</a><br/><span class="description">Manage lists of patrons</span></li>
          <li><a href="#">Patron clubs</a><br/><span class="description">Manage patron clubs</span></li>
          <li><a href="#">Comments</a><br/><span class="description">Moderate patron comments</span></li>
          <li><a href="#">Import patrons</a><br/><span class="description">Import patron data</span></li>
          <li><a href="#">Notices & slips</a><br/><span class="description">Define notices (print and email)</span></li>
          <li><a href="#">Overdue notice/status triggers</a><br/><span class="description">Set notice/status triggers</span></li>
          <li><a href="#">Patron card creator</a><br/><span class="description">Create printable patron cards</span></li>
          <li><a href="#">Batch patron deletion</a><br/><span class="description">Batch delete patrons</span></li>
          <li><a href="#">Batch patron modification</a><br/><span class="description">Modify patrons in batch</span></li>
          <li><a href="#">Batch extend due dates</a><br/><span class="description">Modify due date checkouts</span></li>
          <li><a href="#">Tags</a><br/><span class="description">Moderate patron tags</span></li>
          <li><a href="#">Upload patron images</a><br/><span class="description">Upload patron images</span></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h3 class="section-title">Catalog</h3>
        <ul>
          <li><a href="#">Batch item deletion</a><br/><span class="description">Delete a batch of items</span></li>
          <li><a href="#">Batch item modification</a><br/><span class="description">Modify items in a batch</span></li>
          <li><a href="#">Batch record deletion</a><br/><span class="description">Delete a batch of records</span></li>
          <li><a href="#">Batch record modification</a><br/><span class="description">Modify a batch of records</span></li>
          <li><a href="#">Automatic item modifications</a><br/><span class="description">Define rules to modify items</span></li>
          <li><a href="#">Export data</a><br/><span class="description">Export bibliographic records</span></li>
          <li><a href="#">Inventory</a><br/><span class="description">Perform inventory of catalog</span></li>
          <li><a href="#">Label creator</a><br/><span class="description">Create printable labels</span></li>
          <li><a href="#">Quick spine label creator</a><br/><span class="description">Generate printable spine labels</span></li>
          <li><a href="#">Rotating collections</a><br/><span class="description">Manage rotating collections</span></li>
          <li><a href="#">MARC modification templates</a><br/><span class="description">Manage templates</span></li>
          <li><a href="#">Upload local cover image</a><br/><span class="description">Upload scanned cover images</span></li>
        </ul>
      </div>

      <div class="col-md-4">
        <h3 class="section-title">Additional tools</h3>
        <ul>
          <li><a href="#">Calendar</a><br/><span class="description">Define days when library is closed</span></li>
          <li><a href="#">CSV profiles</a><br/><span class="description">Manage CSV export profiles</span></li>
          <li><a href="#">Log viewer</a><br/><span class="description">Browse system logs</span></li>
          <li><a href="#">News</a><br/><span class="description">Write news for OPAC interfaces</span></li>
          <li><a href="#">Task scheduler</a><br/><span class="description">Schedule tasks to run</span></li>
          <li><a href="#">Edit quotes for QOTD feature</a><br/><span class="description">Quote editor for OPAC</span></li>
          <li><a href="#">Tool plugins</a><br/><span class="description">Use tool plugins</span></li>
          <li><a href="#">Upload</a><br/><span class="description">Upload any type of file</span></li>
          <li><a href="#">Access files</a><br/><span class="description">Access files stored on server</span></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Tools;