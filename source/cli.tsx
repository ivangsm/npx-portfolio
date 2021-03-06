#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";

const cli = meow(`
	Usage
	  $ ivansalazar

	Prints out details about me.
`);

render(React.createElement(App, cli.flags, process.stdout));
