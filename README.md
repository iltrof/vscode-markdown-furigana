# markdown-furigana

VSCode extension which adds furigana support to vscode's
built-in markdown preview.

Based on [furigana-markdown-it](https://github.com/iltrof/furigana-markdown-it).

![](https://raw.githubusercontent.com/iltrof/vscode-markdown-furigana/master/img/intro.png)

## Quick usage

| Input                                                                                                 | Result                                                                                                                                |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `[漢字]{かんじ}`                                                                                      | <ruby>漢字<rp>【</rp><rt>かんじ</rt><rp>】</rp></ruby>                                                                                |
| `[漢字]{かん・じ}`<br> (allowed separator characters: ".．。・\|｜/／", as well as any kind of space) | <ruby>漢<rp>【</rp><rt>かん</rt><rp>】</rp>字<rp>【</rp><rt>じ</rt><rp>】</rp></ruby>                                                 |
| `[取り返す]{とりかえす}`                                                                              | <ruby>取<rp>【</rp><rt>と</rt><rp>】</rp>り<rt></rt>返<rp>【</rp><rt>かえ</rt><rp>】</rp>す<rt></rt></ruby>                           |
| `[可愛い犬]{かわいいいぬ}`                                                                            | <ruby>可愛<rp>【</rp><rt>かわいい</rt><rp>】</rp>い<rt></rt>犬<rp>【</rp><rt>ぬ</rt><rp>】</rp></ruby> (wrong match!)                 |
| `[可愛い犬]{か・わい・いいぬ}`                                                                        | <ruby>可<rp>【</rp><rt>か</rt><rp>】</rp>愛<rp>【</rp><rt>わい</rt><rp>】</rp>い<rt></rt>犬<rp>【</rp><rt>いぬ</rt><rp>】</rp></ruby> |
| `[可愛い犬]{か＋わい・いいぬ}`                                                                        | <ruby>可愛<rp>【</rp><rt>かわい</rt><rp>】</rp>い<rt></rt>犬<rp>【</rp><rt>いぬ</rt><rp>】</rp></ruby>                                |
| `[食べる]{たべる}`                                                                                    | <ruby>食<rp>【</rp><rt>た</rt><rp>】</rp>べる<rt></rt></ruby>                                                                         |
| `[食べる]{=たべる}`                                                                                   | <ruby>食べる<rp>【</rp><rt>たべる</rt><rp>】</rp></ruby>                                                                              |
| `[アクセラレータ]{accelerator}`                                                                       | <ruby>アクセラレータ<rp>【</rp><rt>accelerator</rt><rp>】</rp></ruby>                                                                 |
| `[accelerator]{アクセラレータ}`                                                                       | <ruby>accelerator<rp>【</rp><rt>アクセラレータ</rt><rp>】</rp></ruby>                                                                 |
| `[あいうえお]{*}` (or `{＊}`)                                                                         | <ruby>あ<rt>●</rt>い<rt>●</rt>う<rt>●</rt>え<rt>●</rt>お<rt>●</rt></ruby>                                                             |
| `[あいうえお]{*❤}` (or `{＊❤}`)                                                                       | <ruby>あ<rt>❤</rt>い<rt>❤</rt>う<rt>❤</rt>え<rt>❤</rt>お<rt>❤</rt></ruby>                                                             |

If you need a lengthier description, check out the
[GitHub page for furigana-markdown-it](https://github.com/iltrof/furigana-markdown-it).

If something produces an undesired result, remember that
you can always use the `[foo]{=bar}` syntax to simply
place `bar` above `foo` as-is, without doing anything
fancy. (The full-width equals sign (＝) also works.)

## Known limitations

- Formatting is not applied recursively: `[**foo**]{bar}`
  doesn't make `foo` bold. Instead it produces
  <ruby>\*\*foo\*\*<rt>bar</rt></ruby>.

- Matching hiragana with katakana is not supported. That
  is, `[バカな奴]{ばかなやつ}` wouldn't work, since バカ and ばか are
  not considered equal. `[バカな奴]{バカなやつ}` works fine though,
  producing <ruby>バカな<rt></rt>奴<rt>やつ</rt></ruby>.

- Matching punctuation (or any other random symbols) is
  not supported. That is, `[嫌だ！]{いやだ！}` will not work
  properly (but `[嫌だ！]{いやだ}` will).

- Some formatters (looking at you, Prettier) will
  auto-escape the asterisk in `[あいうえお]{*}`, breaking
  everything. For now, just use a full-width asterisk (＊),
  I guess.
