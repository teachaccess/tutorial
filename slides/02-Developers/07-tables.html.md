---
title: Tables
chapter: Writing Code

style: |

  .editorWithPreview > .editor,
  .editorWithPreview > .preview {
    width: 50%;
  }

  table, th, td {
      border: 1px solid black;
      text-align: center;
      font-size: 1em;
  }

  th {
    background-color: #ddd;
  }

  .table {
    display: table;
  }

  .tableRow {
    display: table-row;
  }

  .tableHeading {
    display: table-header-group;
    background-color: #ddd;
  }

  .tableCell, .tableHead {
    display: table-cell;
    padding: 3px 10px;
    border: 1px solid #999999;
  }

  .tableHeading {
    display: table-header-group;
    background-color: #ddd;
    font-weight: bold;
  }

  .tableBody {
    display: table-row-group;
  }

layoutData:
  description: |
    Tables help screen readers process information presented in a tabular format.
    When information is presented using table markup, screen reader users can
    read down columns and across rows, and even hear column and row headings as they do so.

  examples:
    - title: Semantic Table
      description: |
        The following table uses semantic table markup. HTML provides many elements and attributes to create fully
        accessible tables. Note: ARIA 1.0 does not include HTML table equivalence; that is coming in ARIA 1.1. So
        it is best to stick to native HTML unless you are building an interactive grid that includes two-dimensional
        arrow key navigation of the table content. To test the table below with VoiceOver:

        1. Press <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Cmd</kbd> + <kbd>h</kbd> repeatedly until you reach the Editor Output region.
        2. Now press <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Right Arrow</kbd> repeatedly to navigate the table cells.

        At this time, VoiceOver does not read the column headers in Chrome. However, VoiceOver does read them in Safari. Windows screen readers typically read column and row headers as well.

      code: |
        <table>
          <tr>
            <td></td>
            <th>Week1</th>
            <th>Week2</th>
          </tr>
          <tr>
            <th>Clicks</th>
            <td>100</td>
            <td>90</td>
          </tr>
          <tr>
            <th>Likes</th>
            <td>60</td>
            <td>55</td>
          </tr>
        </table>

    - title: Unsemantic Table exercise
      description: |
        If the information is tabular, using CSS to create the appearance of a table makes the information
        almost impossible for a screen reader user to understand and use. Convert the following tabular data
        into an accessible HTML table.

      code: |
            <div class="table">
              <div class="tableHeading">
                <div class="tableHead">
                  Month
                </div>
                <div class="tableHead">
                  Mood
                </div>
              </div>
              <div class="tableBody">
                <div class="tableRow">
                  <div class="tableCell">
                    January
                  </div>
                  <div class="tableCell">
                    happy
                  </div>
                </div>
              </div>
            </div>

      assertion: |
        assert(
          dom.querySelector('table'),
          "Use a semantic table element."
        );
        assert(
          dom.querySelectorAll('tr').length == 2,
          "Are you using semantic tr tags?"
        );
        assert(
          dom.querySelectorAll('th').length == 2,
          "Are you using semantic th tags?"
        );
        assert(
          dom.querySelectorAll('td').length == 2,
          "Are you using semantic td tags?"
        );
---
