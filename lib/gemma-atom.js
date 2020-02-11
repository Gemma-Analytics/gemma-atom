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
      // Get the last part of the string - table may be in any of the forms:
      // database.schema.table ; schema.table ; table
      // remove double quotes if they exist
      var selection = editor.getSelectedText()
      selection = selection.split('.')
      selection = selection[selection.length - 1]
      editor.insertText("{{ ref('" + selection.replace(/"/g, "") + "') }}")
    }
  },

};
