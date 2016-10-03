module Jekyll
	class A11yBlock < Liquid::Block

		def initialize(tag_name, markup, tokens)
			super
			@markup = markup
		end

		def render(context)
			@title = "Accessibility"
			if @markup.length > 0
				@title = "Accessibility: " + @markup
			end
			"<div class=\"accessibility\" markdown=\"1\"><div class=\"note-title\">#{@title}</div>#{super}</div>"
		end
	end
end

Liquid::Template.register_tag('a11y', Jekyll::A11yBlock)
