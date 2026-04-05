# ZGM

Open source gaming mouse firmware built on Zephyr RTOS.

`zgm` is intended to be a flexible firmware foundation for gaming mice, with a focus on low-latency input, hardware extensibility, and customizable device behavior. The long-term goal is to provide a clean platform for building and iterating on modern mouse features without being locked into a closed firmware stack.

## Project Goals

- low-latency input processing
- customizable button, sensor, and lighting behavior
- modular driver architecture for different hardware variants
- a maintainable Zephyr-based firmware foundation
- an open workflow for experimentation, testing, and community contribution

## Status

This repository is currently in its early setup stage.

At the moment, the project contains repository housekeeping files and licensing information while the firmware codebase and developer workflow are being prepared. The README will evolve as source code, board support, build instructions, and flashing guidance are added.

## Planned Scope

The project is expected to grow toward:

- Zephyr-based firmware sources
- board or hardware configuration layers
- sensor, button, wheel, and wireless driver integration
- build and flashing instructions
- example hardware targets and bring-up notes
- testing and validation guidance for latency and reliability

## Why Zephyr

Zephyr provides a strong foundation for embedded firmware development, including:

- broad MCU and peripheral support
- an established RTOS and device model
- scalable configuration and build tooling
- a well-known ecosystem for maintainable embedded projects

These qualities make it a strong base for an extensible gaming mouse firmware platform.

## Contributing

Contributions are welcome as the project takes shape. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening issues or pull requests.

By participating in this project, you agree to follow the guidelines in [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the [GPL-3.0](./LICENSE).
