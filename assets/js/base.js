_desktop = `
<div id="nav-bar" style="list-style-type: none;overflow: hidden;background-color: black;position: fixed;top: 0;left: 0;width: 100%;margin: 0;">
    <center>
    <a href="#About" style="font-family: Calibri;color: #cdcdcd;margin-right: 20px;text-decoration: none;display: inline-block;text-align: center;padding: 13px 16px;">About</a>
    <a href="mailto:saptakbhoumik@gmail.com" style="font-family: Calibri;color: #cdcdcd;margin-right: 20px;text-decoration: none;display: inline-block;text-align: center;padding: 13px 16px;">Contact</a>
    <a href="https://github.com/Swallow-lang" style="font-family: Calibri;color: #cdcdcd;margin-right: 20px;text-decoration: none;display: inline-block;text-align: center;padding: 13px 16px;">GitHub</a>
    <a href="" style="font-family: Calibri;color: #cdcdcd;margin-right: 20px;text-decoration: none;display: inline-block;text-align: center;padding: 13px 16px;">Docs</a>
    </center>
</div>

<div class="session-one" align="center">
    <h1>Swallow</h1><p>A Fast alternative language to Python,<br>Built using V and C programming language.</p>
</div>

<div id="footer" style="margin: 0;background-color: whitesmoke;">
    <center>
        <p style="font-family: Calibri;padding: 30px;margin: 0;color: #a4a4a9;float: left;">Copyright © 2021 Swallow language. All rights reserved.</p>
        <a href="https://www.mozilla.org/en-US/MPL/2.0/" style="font-family: Calibri;padding: 30px;float: left;margin: 0;color: #909092;text-decoration: none;">License</a>
        <a href="https://en.wikipedia.org/wiki/India" style="font-family: Calibri;padding: 30px;float: right;margin: 0;color: #909092;text-decoration: none;">India</a>
        <a href="https://github.com/Swallow-lang/swallow/issues" style="font-family: Calibri;padding: 30px;float: left;margin: 0;color: #909092;text-decoration: none;">Report Issue</a>
        <a href="https://github.com/Swallow-lang/swallow/pulls" style="font-family: Calibri;padding: 30px;float: left;margin: 0;color: #7ebde2;text-decoration: none;">Contributing</a>
    </center>
</div>
`

_mobile = `
Currenly this website does'nt support mobile.
`

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

if (isMobile) {
    document.write(_mobile)
} else {
    document.write(_desktop)
}

