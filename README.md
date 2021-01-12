<p align="center">
  <a href="http://liboexplorer.com/" rel="noopener" target="_blank"><img width="180" src="http://liboexplorer.com/static/media/logo.70760640.png" alt="Libonomy logo"></a></p>
</p>

<h1 align="center">Libo Explorer</h1>

<div align="center">

Libo Explorer is a Block Explorer and Analytics Platform for Libo Coin, a decentralized smart contracts platform.

</div>

## Installation

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone https://github.com/libonomy/explorer.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
5.  Run `npm run clean` to delete the example app.

Now you're ready to rumble!

## Contribution

#### Sending a Pull Request

Libo Explorer is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/explorer.git
cd explorer
git remote add upstream https://github.com/libonomy/explorer.git
```

3. Synchronize your local `next` branch with the upstream one:

```sh
git checkout development
git pull upstream development
```

4. Install the dependencies with npm:

```sh
npm install
```

5. Create a new topic branch:

```sh
git checkout -b my-topic-branch
```

6. Make changes, commit and push to your fork:

```sh
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/libonomy/explorer) and make a Pull Request.

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.
