'use babel';

import { CompositeDisposable } from 'atom';

export default {


  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that converts the selection
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'gemma-atom:convert': () => this.convert()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  convert() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const selection = editor.getSelectedText()

      editor.insertText("{{ ref('" + selection.split('.')[1] + "') }}")
    }
  },

};
