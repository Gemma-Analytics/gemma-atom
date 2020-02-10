'use babel';

import { CompositeDisposable } from 'atom';

export default {


  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register commands
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'gemma-atom:turntoref': () => this.turn_text_to_dbt_reference()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  turn_text_to_dbt_reference() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      const selection = editor.getSelectedText()

      editor.insertText("{{ ref('" + selection.split('.')[1] + "') }}")
    }
  },

};
