module Jekyll
	class NoteBlock < Liquid::Block

		def initialize(tag_name, markup, tokens)
			super
			@markup = markup
		end

		def render(context)
			@title = "Note"
			if @markup.length > 0
				@title = "Note: " + @markup
			end
			"<div class=\"note\" markdown=\"1\"><div class=\"note-title\">#{@title}</div>#{super}</div>"
		end
	end
end

Liquid::Template.register_tag('note', Jekyll::NoteBlock)
