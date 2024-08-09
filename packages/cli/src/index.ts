#!/usr/bin/env node

import { Command } from "commander";

import { add } from "./commands/add";

function main() {
    const program = new Command();

    program
        .name("fiscale-ui cli interface")
        .description("awesome cli")
        .version("0.0.0")
        
    program.addCommand(add)

    program.parse();
}

main()