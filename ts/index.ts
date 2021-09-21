/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as Path from "path";
import * as PiCamera from "pi-camera";
import {KBBot, KBResponse, KBMessage, KBConversation} from "@elijahjcobb/keybase-bot-builder";

(async (): Promise<void> => {

	// The third parameter to the KBBot.init() static method is optional but is shown below
	// with all optional properties defined.
	const paperKeyPath: string = Path.resolve("./paperkey.txt");
	const bot: KBBot = await KBBot.init("home_cam_bot", paperKeyPath, {
		logging: true, // whether all events should be logged
		debugging: true, // whether debugging mode should be enabled (allows extra commands)
		hostname: "home_cam_bot", // the hostname to show up in logs
		checkAllMessages: true // whether all messages should be executed or just those that start with '!'
	});

	bot.onNewConversation(async(conv: KBConversation, res: KBResponse): Promise<void> => {

		await res.send(`Hello ${conv.getUserName()}! Nice of you to chat with me! Use a \`!\` to execute my commands.`);

	});

	bot.command({
		name: "pic",
		description: "Send a pic.",
		usage: "!pic",
		handler: async (msg: KBMessage, res: KBResponse): Promise<void> => {
			if (msg.getUsername() !== "elijahcobb") await res.send("Sorry! You are not authorized. Message @elijahcobb for authorization.");
			// const myCamera = new PiCamera({
			// 	mode: "photo",
			// 	output: `${ __dirname }/snap.jpg`,
			// 	width: 640,
			// 	height: 480,
			// 	nopreview: true,
			// });
			//
			// const path = await myCamera.snap();
			// await res.sendFile(path);
			await res.send("HI ELIJAH!");
		}
	});

	bot.start();

})();
