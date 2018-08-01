import m from 'mithril'
import moment from 'moment'
import { Changes } from '../models/Changes'
import { ChangelogEntryComponent } from './ChangelogEntryComponent'
import { DarkmodeComponent } from './DarkmodeComponent'
import { DarkmodePreferenceComponent } from './DarkmodePreferenceComponent'

export const ChangelogComponent = {
  view: function () {
    const commits = Changes.commits.sort(
      (a, b) => new Date(b.author.date).getTime() - new Date(a.author.date).getTime()
    )

    const entries = commits.map((commit, index) => {
      return [
        m(
          'div.w-100.tc.ma0.pa0.f9',
          timeBetweenCommits(commit, commits[index - 1]),
        ),
        m(ChangelogEntryComponent, commit),
      ]
    })

    return m(DarkmodeComponent, [
      m('div.mb2.tc', [m('a[href=/]', 'Click here to go back')]),
      m('h1.tc', 'Changelog'),
      entries,
    ])
  }
}

function timeBetweenCommits (a, b) {
  return !b
    ? `${moment(a.author.date).fromNow(true)} without an accident`
    : moment(a.author.date).from(b.author.date, true)
}
