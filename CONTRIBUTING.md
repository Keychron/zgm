# Contributing

Thanks for contributing to `Keychron/zgm`.

This repository is a lightweight analysis and report-generation workspace. Most contributions fall into one of these categories:

- improving or extending existing Python generators
- adding reusable scripts for new report types
- refining HTML output quality or report structure
- documenting workflows, assumptions, or operating conventions

## Before You Start

1. Read `AGENTS.md`.
2. Read `WORKSPACE_PLAYBOOK.md`.
3. Read `NEXT_STEPS.md`.
4. Inspect the current file tree and look for the closest existing script or output to the change you want to make.

Prefer extending an existing script over creating a near-duplicate.

## Repository Layout

- `data/`: raw or semi-processed source data
- `scripts/`: reusable analysis and report generation scripts
- `outputs/`: polished HTML deliverables and dashboards
- `reports/`: markdown or HTML report documents

Some root-level Python files are also standalone generators for one-off or reusable deliverables.

## Development Guidelines

- Keep solutions lightweight and readable.
- Prefer Python standard library solutions when the task is self-contained.
- Reuse current patterns before introducing a new structure or framework.
- Keep generated deliverables in `outputs/` or `reports/`, not mixed into `data/`.
- Use timestamped filenames for newly generated reports.
- Preserve prior outputs unless the change explicitly replaces them.
- If a change depends on live web data, confirm freshness before relying on cached JSON.

## Making a Change

1. Identify the closest existing script or report.
2. Update that implementation with the smallest reusable change that solves the problem.
3. Run the relevant script or otherwise verify the affected workflow.
4. Spot-check the generated artifact for correctness and presentation.
5. Update `NEXT_STEPS.md` if you discover a meaningful follow-up gap or reusable opportunity.

## Verification Expectations

This repository does not currently enforce a single automated test suite, so verification is usually task-specific. When opening a pull request, include:

- what you changed
- how you verified it
- any assumptions, data limitations, or freshness constraints

Good verification examples:

- running the affected Python script successfully
- checking headline metrics or classifications against source data
- opening the generated HTML and confirming layout and labels

## Pull Requests

Please keep pull requests focused and easy to review.

- Use a clear title and description.
- Explain the business or workflow reason for the change.
- Avoid bundling unrelated refactors with a functional update.
- Mention any new inputs, outputs, or manual steps reviewers should know about.

If your change adds a new generator, document its expected inputs and outputs near the top of the script or in the PR description.

## Data and Generated Files

Be intentional about what you commit.

- Commit source code, documentation, and reusable assets.
- Commit generated reports only when they are meaningful deliverables for the repository.
- Avoid committing local scratch files, editor artifacts, or environment-specific files.
- Do not remove prior outputs unless the change is explicitly intended to replace them.

## Code of Conduct

By participating in this project, you agree to abide by the guidelines in `CODE_OF_CONDUCT.md`.
