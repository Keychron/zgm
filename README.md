# ZGM

Open source gaming mouse firmware built on Zephyr RTOS.

`zgm` is an open firmware foundation for modern gaming mice, with a focus on low-latency input, hardware flexibility, and long-term maintainability. The goal is to create a platform that makes it easier to build, study, customize, and improve gaming mouse behavior without being locked into a closed vendor firmware stack.

## Table of Contents

- [Why This Project Exists](#why-this-project-exists)
- [Project Goals](#project-goals)
- [Design Principles](#design-principles)
- [Status](#status)
- [Planned Scope](#planned-scope)
- [Roadmap](#roadmap)
- [Planned Hardware Areas](#planned-hardware-areas)
- [Why Zephyr](#why-zephyr)
- [Why This Matters for the Community](#why-this-matters-for-the-community)
- [How to Help](#how-to-help)
- [Contributing](#contributing)
- [License](#license)

## Why This Project Exists

Open source keyboard firmware has shown how powerful a community-driven input ecosystem can be. Projects such as QMK and ZMK have made keyboards more customizable, more transparent, and easier to iterate on across both hobbyist and commercial hardware.

Gaming mice are still far more closed.

Compared with keyboards, mice usually offer much less visibility into:

- input and click processing behavior
- debounce and event timing decisions
- sensor configuration and motion tuning
- wheel, button, lighting, and wireless behavior
- the tradeoffs between latency, power, reliability, and feature complexity

`zgm` exists to help close that gap. The aim is to build an open platform where developers and hardware teams can experiment in the open, share improvements, and build gaming mouse firmware on a maintainable foundation instead of a black box.

## Project Goals

- low-latency input processing
- customizable button, sensor, scroll wheel, and lighting behavior
- modular driver architecture for different hardware variants
- a maintainable Zephyr-based firmware foundation
- an open workflow for experimentation, testing, and community contribution
- a path toward reusable building blocks for future gaming mouse products

## Design Principles

As the project grows, `zgm` is intended to follow a few core principles:

- performance matters: input handling should be designed with responsiveness and consistency in mind
- hardware flexibility matters: the architecture should support multiple hardware variants without turning into a monolith
- maintainability matters: firmware should be understandable, testable, and evolvable over time
- openness matters: project direction, design tradeoffs, and implementation details should be visible to the community
- practical experimentation matters: the codebase should support real bring-up, tuning, and validation work rather than existing only as a demo

## Status

This repository is currently in its early setup phase.

At the moment, the repository mainly contains project scaffolding, policy files, and the initial project direction. Firmware sources, board support, build instructions, and flashing guidance are still being prepared.

That means `zgm` is early, but it is intentionally early in public. The goal is not to wait until everything is finished before opening the door. The goal is to make the long-term direction visible and let the project grow into a useful open firmware platform in the open.

## Planned Scope

The project is expected to grow toward:

- Zephyr-based firmware sources
- board and hardware configuration layers
- sensor, button, wheel, and lighting integration
- wired and potentially wireless device support
- build, flashing, and bring-up instructions
- example hardware targets and reference implementations
- testing and validation guidance for latency, reliability, and device behavior

## Roadmap

The roadmap below reflects the intended direction of the project, not a guaranteed delivery schedule.

| Milestone | Description |
| --- | --- |
| Repository bootstrap | Establish project structure, documentation, and contribution foundations |
| Firmware skeleton | Add the first Zephyr application structure and baseline configuration |
| Input path bring-up | Implement button, scroll, and basic HID event flow |
| Sensor integration | Add initial motion sensor support and configuration pathways |
| USB functionality | Support wired device operation and host-facing HID behavior |
| Hardware abstraction | Define clearer layers for board-specific and component-specific support |
| Validation workflow | Add testing and measurement guidance for latency, stability, and regression checks |
| Extended device features | Expand support for lighting, wireless paths, per-device customization, and future hardware variants |

## Planned Hardware Areas

While specific target hardware will become clearer over time, `zgm` is being shaped with the following areas in mind:

- gaming mouse MCU platforms supported well by Zephyr
- optical motion sensors and their tuning/configuration layers
- button and click path handling
- scroll wheel integration
- RGB or status lighting control
- battery and power-management behavior where relevant
- wired and wireless device architectures

The intention is to support a clean separation between common firmware behavior and hardware-specific implementation details so the project can scale to more than one device shape or component stack.

## Why Zephyr

Zephyr provides a strong foundation for embedded firmware development, including:

- broad MCU and peripheral support
- an established RTOS and device model
- scalable configuration and build tooling
- a well-known ecosystem for maintainable embedded projects
- a structure that is well suited to layered hardware support and long-term firmware growth

These qualities make it a strong base for an extensible gaming mouse firmware platform.

## Why This Matters for the Community

`zgm` is meant to extend the open-source input-device culture that already exists around keyboards into the mouse space.

Keychron has already embraced open ecosystems such as QMK and ZMK, which have shown how community-driven firmware can unlock deep customization, faster iteration, and meaningful developer contribution. The long-term direction is for future Keychron gaming mice to build on this open firmware approach as well.

Bringing that philosophy to mice helps:

- unify keyboard and mouse customization under a more open model
- encourage a broader open input ecosystem instead of limiting openness to keyboards
- create a better foundation for hardware bring-up, tuning, and experimentation
- fill an important gap, since open-source mouse firmware is still much rarer than open-source keyboard firmware

This matters because gaming mice remain far more closed and vendor-controlled than keyboards. An open project like `zgm` can make experimentation, customization, and collaboration much more accessible.

## How to Help

Even at an early stage, there are many valuable ways to contribute.

Useful contributions include:

- architecture feedback for the firmware layout
- ideas for hardware abstraction and driver boundaries
- Zephyr-specific workflow suggestions
- input latency measurement methodology
- sensor integration research
- bring-up notes for candidate MCUs, sensors, and peripheral components
- documentation improvements that make the project easier to understand and join

Early-stage contributions are especially valuable when they improve clarity, reduce future rework, or help shape a better technical direction before implementation grows.

## Contributing

Contributions are welcome as the project takes shape. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening issues or pull requests.

By participating in this project, you agree to follow the guidelines in [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the [GPL-3.0](./LICENSE).
