# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login fail and data loked
- Location: tests/login.spec.ts:44:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --headless --no-startup-window --start-maximized
<launched> pid=8338
[pid=8338][err] Cannot parse arguments: Unknown option --start-maximized
Call log:
  - <launching> /home/runner/.cache/ms-playwright/webkit-2272/pw_run.sh --inspector-pipe --headless --no-startup-window --start-maximized
  - <launched> pid=8338
  - [pid=8338][err] Cannot parse arguments: Unknown option --start-maximized
  - [pid=8338] <gracefully close start>
  - [pid=8338] <kill>
  - [pid=8338] <will force kill>
  - [pid=8338] <process did exit: exitCode=1, signal=null>
  - [pid=8338] starting temporary directories cleanup
  - [pid=8338] finished temporary directories cleanup
  - [pid=8338] <gracefully close end>

```