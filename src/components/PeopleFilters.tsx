import { NameFilter } from './NameFilter';
import { CenturyFilter } from './CenturyFilter';

import { SexPersonFilter } from './SexPersonFilter';
import { SearchLink } from './SearchLink';

export const PeopleFilters = () => {
  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>

      <SexPersonFilter />
      <NameFilter />
      <CenturyFilter />
      <div className="panel-block">
        <SearchLink
          className="button is-link is-outlined is-fullwidth"
          params={{ query: null, sex: null, centuries: null }}
        >
          Reset all filters
        </SearchLink>
      </div>
    </nav>
  );
};
