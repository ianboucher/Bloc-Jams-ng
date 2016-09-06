class Song < ActiveRecord::Base
    belongs_to :album

    # wft is this??
    # def as_json(options = {})
    #     super(options.merge(include: :comments))
    # end
end
