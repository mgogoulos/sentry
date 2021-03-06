import React from 'react';

import SelectAsyncControl from './selectAsyncControl';
import SelectField from './selectField';

class SelectAsyncField extends SelectField {
  static defaultProps = {
    ...SelectField.defaultProps,
    placeholder: 'Start typing to search for an issue',
  };

  onResults = data => {
    const {name} = this.props;
    const results = data && data[name];

    return (results && results.map(({id, text}) => ({value: id, label: text}))) || [];
  };

  onQuery = query =>
    // Used by legacy integrations
    ({autocomplete_query: query, autocomplete_field: this.props.name});

  getField() {
    // Callers should be able to override all props except onChange
    // FormField calls props.onChange via `setValue`
    return (
      <SelectAsyncControl
        id={this.getId()}
        onResults={this.onResults}
        onQuery={this.onQuery}
        {...this.props}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}

export default SelectAsyncField;
