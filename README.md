# js_isN

## eng
Function that determine the format of string data is number or not a number.

## for the first time
Body of this program is "isN.js".
Include that file into your html, or paste programs into your js file.

## grammar
`isN("Strings", Type of check)` -- Returns boolean value.<br>
Function returns `True` if `"Strings"` follow a format specified in `Type of check`.
If not, function returns `False`.

## usage
`Type of check` is an integer value, specified in 0 ~ 63.
If the value is set out of that range, return `"invalid modtype"` in the console.
This specification is applied if you entered a value isn't a integer.
How to get a value of `Type of check`: Sum numbers on the "T" field, but only the answer of question is true.
<table>
  <tr>
    <th>Question</th>
    <th>T</th>
  </tr>
  <tr>
    <td>We want to determine that a value is a natural number, or not.</td>
    <td>0</td>
  </tr>
  <tr>
    <td>We want to determine that a value is a natural number & 0, or not.</td>
    <td>1</td>
  </tr>
  <tr>
    <td>We want to determine that a value is a integer, or not.</td>
    <td>2</td>
  </tr>
  <tr>
    <td>We want to determine that a value is a decimal number, or not.</td>
    <td>4</td>
  </tr>
  <tr>
    <td>We want to ignore all spaces put in a operand.</td>
    <td>8</td>
  </tr>
  <tr>
    <td>We want to say False if the value starts with "." like ".5" or ".023"</td>
    <td>16</td>
  </tr>
  <tr>
    <td>We want to ignore all "," and some accounting marks <small>($, €, etc…)</small> put in a operand.</td>
    <td>32</td>
  </tr>
</table>

### For example:
<ul>
  <li>3 : All integer(contains plus, minus, and 0)</li>
  <li>7 : All Real Number</li>
</ul>

### constant name
Some value about `Type of check` has a designated name, defined as a constant value.
<table>
  <tr>
    <th>Designated Name</th>
    <th>Meaning Value</th>
  </tr>
  <tr>
    <td>NATURAL_ONLY</td>
    <td>0</td>
  </tr>
  <tr>
    <td>ZERO_AND_NATURAL</td>
    <td>1</td>
  </tr>
  <tr>
    <td>ALL_INTEGER</td>
    <td>3</td>
  </tr>
  <tr>
    <td>ALL_REAL</td>
    <td>7</td>
  </tr>
  <tr>
    <td>SPACE_NOTSTRICT/td>
    <td>8</td>
  </tr>
  <tr>
    <td>NO_FIRST_PERIOD</td>
    <td>16</td>
  </tr>
  <tr>
    <td>ACCOUNTING_NUM</td>
    <td>32</td>
  </tr>
</table>

## example
`isN("5", 0)`                 :returns `True`   (Check type 0 say `True` when only natural number is specified)<br>
`isN("0", 0)`                 :returns `False`<br>
`isN("0", 1)`                 :returns `True`   (Check type 1 say `True` when 0 or natural number is specified)<br>
`isN("-5", 1)`                :returns `False`<br>
`isN("-6", ALL_INTEGER)`      :returns `True`<br>
`isN("-3", 2)`                :returns `False`  (Check type 2 say `True` when any integer number is specified, <b>but `False` for 0</b>)<br>
`isN("6.7", 3)`               :returns `False`  (Check type 3 say `True` when any integer number is specified.)<br>
`isN("6.7", 4)`               :returns `True`   (Check type 4 say `True` when real number bigger than 0 is specified - Not useful)<br>
`isN("-4.7", 7)`              :returns `True`   (Check type 7 say `True` when any real number is specified.)<br>
`isN("0.0", 7)`               :returns `True`<br>
`isN(" 7 6", 7)`              :returns `False`<br>
`isN(" 7 6", 8)`              :returns `True`   (Check type 8 say `True` because when the type includes 8, space is ignored)<br>
`isN("    -9.9999999", 15)`   :returns `True`   (If check type includes 8, " 7 6" will be read as "76")<br>
`isN("      ", 15)`           :returns `False`  (It will be read as "", so this is not a number)<br>
`isN(".6", 23)`               :returns `False`  (Check type including 16 say `False` when the value starts at ".")<br>
`isN(".6", 7)`                :returns `True`   (This returns `True` because normally ".6" is parsed as 0.6)<br>
`isN("$7,162.84", 32)`        :returns `True`<br>

### caution
<ul>
  <li>Parameter 16 does not work in 16~19 (Because 0~3 reject any number except integer)</li>
</ul>

## Other
We don't need to credit me to use this plugin.
This plugin is now developping.

## Known issues
<ul>
  <li>pass</li>
  <del><li>If we specify "" for 1st operand, function returns True -> 0x01</li></del>
</ul>

## Release Note
Ver0.06 Fixed a problem 0x01.
Ver0.05 Public release.
